import { NextResponse } from "next/server";
import { sendInquiryNotificationWhatsApp } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || !body.name || (!body.phone && !body.email)) {
      return NextResponse.json(
        { error: "Name and contact number (phone or email) are required." },
        { status: 400 }
      );
    }

    const result = await sendInquiryNotificationWhatsApp({
      name: body.name,
      company: body.company || "",
      email: body.email || "Not provided",
      phone: body.phone || "Not provided",
      country: body.country || "",
      service: body.enquiryType || body.service || "Contract Manufacturing",
      message: body.message || body.notes || "",
      formType: body.formType || "Accra Pack Form",
      website: "Accra Pack",
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully recorded and sent to WhatsApp.",
      whatsapp: result,
    });
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : "Unknown error while processing inquiry";
    console.error("[Accra Pack Inquiry Error]:", errorMsg);
    return NextResponse.json(
      { error: "Internal server error", details: errorMsg },
      { status: 500 }
    );
  }
}

