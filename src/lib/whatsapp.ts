export interface OtomatWhatsAppConfig {
  vendorUid: string;
  accessToken: string;
  ownerPhone: string;
  websiteName: string;
}

export function getWhatsAppConfig(): OtomatWhatsAppConfig {
  return {
    vendorUid: (
      process.env.OTOMAT_VENDOR_UID || "4ed30edb-4c26-409c-9033-371416cee5ba"
    ).trim(),
    accessToken: (
      process.env.OTOMAT_ACCESS_TOKEN ||
      "2YN2CQGBlDXVihiNcVgekdJZszehILXKLuEDiu9xJmcpFSNvQubgsPbQHaiKFp1q"
    ).trim(),
    ownerPhone: (
      process.env.OTOMAT_OWNER_WHATSAPP || "917304945823,916355427085"
    ).trim(),
    websiteName: (process.env.OTOMAT_WEBSITE_NAME || "Accra Pack").trim(),
  };
}

export interface InquiryWhatsAppPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  country?: string;
  service?: string;
  message?: string;
  formType?: string;
  website?: string;
}

/**
 * Dispatches an automated WhatsApp enquiry alert to the Owner via Otomat API.
 * Supports single or multiple comma-separated phone numbers.
 */
export async function sendInquiryNotificationWhatsApp(
  inquiry: InquiryWhatsAppPayload
): Promise<{ success: boolean; results: unknown[] }> {
  const config = getWhatsAppConfig();

  if (!config.vendorUid || !config.accessToken || !config.ownerPhone) {
    console.warn("[WhatsApp Alert] Missing Otomat credentials or phone number.");
    return { success: false, results: [] };
  }

  const endpoint = `https://otomat.in/api/${config.vendorUid}/contact/send-message?token=${encodeURIComponent(
    config.accessToken
  )}`;

  const siteName = inquiry.website || config.websiteName;
  const serviceName = inquiry.service ? inquiry.service.trim() : "General Inquiry";
  const userMessage = inquiry.message ? inquiry.message.trim() : "No message provided";
  const formType = inquiry.formType || "Website Contact Form";

  const now = new Date();
  const timeString = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const lines = [
    `🔔 *NEW WEBSITE ENQUIRY - ${siteName.toUpperCase()}*`,
    ``,
    `👤 *Name:* ${inquiry.name.trim()}`,
  ];

  if (inquiry.company && inquiry.company.trim()) {
    lines.push(`🏢 *Company:* ${inquiry.company.trim()}`);
  }

  lines.push(
    `📱 *Phone:* ${inquiry.phone.trim()}`,
    `✉️ *Email:* ${inquiry.email.trim()}`
  );

  if (inquiry.country && inquiry.country.trim()) {
    lines.push(`🌍 *Country:* ${inquiry.country.trim()}`);
  }

  lines.push(
    `🎯 *Service/Requirement:* ${serviceName}`,
    `💬 *Message:* ${userMessage}`,
    ``,
    `🌐 *Source:* ${formType}`,
    `📅 *Received:* ${timeString}`,
    ``,
    `⚡ _Please follow up with the lead immediately._`
  );

  const formattedBody = lines.join("\n");

  // Extract phone numbers (supports comma-separated list)
  const phoneNumbers = config.ownerPhone
    .split(",")
    .map((p) => p.replace(/\D/g, ""))
    .map((p) => (p.length === 10 ? "91" + p : p))
    .filter((p) => p.length >= 10);

  const results: unknown[] = [];

  for (const phone of phoneNumbers) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: phone,
          message_body: formattedBody,
        }),
      });

      const data = await res.json().catch(() => ({}));
      results.push({ phone, status: res.status, data });
    } catch (err) {
      console.error(`[WhatsApp Alert] Failed to dispatch to ${phone}:`, err);
      results.push({ phone, error: (err as Error).message });
    }
  }

  return { success: results.some((r: any) => r.data?.result === "success"), results };
}

