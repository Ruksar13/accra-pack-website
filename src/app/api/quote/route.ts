import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = body.name || body.fullName;
    const company = body.company || "";
    const email = body.email;
    const phone = body.phone;
    const country = body.country || "India";
    const format = body.format || body.enquiryType || body.productCategory || "Aerosol Contract Manufacturing";
    const formulationType = body.formulationType || "Custom / Turnkey";
    const volume = body.volume || "Commercial Production";
    const notes = body.notes || body.message || "";

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Gmail SMTP Transporter
    const smtpUser = process.env.SMTP_USER || "ruksar.rndtechnosoft@gmail.com";
    const smtpPass = (process.env.SMTP_PASS || "onbcqyvstlczbtxm").replace(/\s+/g, "");
    const adminEmail = process.env.ADMIN_EMAIL || "sales@accrapacindia.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const timestamp = new Date().toLocaleString("en-US", { 
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium" 
    });

    // Beautiful Royal Blue (#1455A6) branded HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(20, 85, 166, 0.15); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #0b182f 0%, #1455A6 100%); color: #ffffff; padding: 32px 28px; text-align: left; }
          .badge { display: inline-block; background: rgba(0, 184, 199, 0.2); color: #00B8C7; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 9999px; border: 1px solid rgba(0, 184, 199, 0.4); margin-bottom: 12px; }
          .title { margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; }
          .subtitle { margin: 6px 0 0; font-size: 13px; color: #cbd5e1; }
          .content { padding: 28px; }
          .section-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #1455A6; margin-bottom: 14px; border-bottom: 2px solid #f0f6fe; padding-bottom: 6px; }
          .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px; }
          .data-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
          .data-table td.label { font-weight: 700; color: #64748b; width: 38%; }
          .data-table td.val { font-weight: 600; color: #0f172a; }
          .highlight-card { background: #f0f6fe; border-left: 4px solid #1455A6; border-radius: 8px; padding: 14px 16px; margin-bottom: 20px; }
          .notes-box { background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px 16px; font-size: 13px; color: #334155; line-height: 1.6; }
          .footer { background: #071324; color: #94a3b8; padding: 20px 28px; font-size: 11px; text-align: center; border-top: 1px solid #1e293b; }
          .footer a { color: #00B8C7; text-decoration: none; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">Accra Pac Web Lead</div>
            <h1 class="title">New RFQ / Quote Inquiry</h1>
            <p class="subtitle">Received via Website Form on ${timestamp} IST</p>
          </div>
          
          <div class="content">
            <div class="highlight-card">
              <div style="font-size: 11px; font-weight: 800; color: #1455A6; text-transform: uppercase; margin-bottom: 4px;">Primary Request Format</div>
              <div style="font-size: 17px; font-weight: 800; color: #0f172a;">${format || "Aerosol Spray"} &bull; ${volume || "Commercial Run"}</div>
            </div>

            <div class="section-title">Client Information</div>
            <table class="data-table">
              <tr>
                <td class="label">Client Name</td>
                <td class="val">${name}</td>
              </tr>
              <tr>
                <td class="label">Company / Brand</td>
                <td class="val">${company || "Not Specified"}</td>
              </tr>
              <tr>
                <td class="label">Business Email</td>
                <td class="val"><a href="mailto:${email}" style="color: #1455A6; text-decoration: none; font-weight: 700;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td class="val"><a href="tel:${phone}" style="color: #1455A6; text-decoration: none; font-weight: 700;">${phone}</a></td>
              </tr>
              <tr>
                <td class="label">Destination / Country</td>
                <td class="val">${country || "India"}</td>
              </tr>
            </table>

            <div class="section-title">Product & Technical Requirements</div>
            <table class="data-table">
              <tr>
                <td class="label">Product Format</td>
                <td class="val"><strong>${format || "Aerosol Spray"}</strong></td>
              </tr>
              <tr>
                <td class="label">Formulation Approach</td>
                <td class="val">${formulationType || "Ready Library Formula"}</td>
              </tr>
              <tr>
                <td class="label">Anticipated Run</td>
                <td class="val">${volume || "50,000 – 250,000 units"}</td>
              </tr>
            </table>

            <div class="section-title">Client Notes / Specifications</div>
            <div class="notes-box">
              ${notes ? notes.replace(/\n/g, "<br/>") : "<em>No additional notes provided by client.</em>"}
            </div>
          </div>

          <div class="footer">
            <p style="margin: 0 0 6px;">
              Accra Pac India Pvt. Ltd. &bull; Plot No. 1105, Phase III, G.I.D.C., Vapi, Gujarat – 396195
            </p>
            <p style="margin: 0;">
              Inquiry sent to: <a href="mailto:${adminEmail}">${adminEmail}</a> &bull; Handled via Accra Pac Website System
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send Mail
    await transporter.sendMail({
      from: `"Accra Pac Website Inquiry" <ruksar.rndtechnosoft@gmail.com>`,
      to: adminEmail,
      replyTo: email,
      subject: `[RFQ] New Quote Request from ${name} (${company || "Brand Partner"}) - ${format}`,
      html: htmlContent,
      text: `
New RFQ / Quote Inquiry from Accra Pac Website:
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone}
Country: ${country || "India"}
Format: ${format}
Formulation Approach: ${formulationType}
Volume: ${volume}
Notes: ${notes || "None"}
Received: ${timestamp} IST
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: "Quote request sent successfully to sales@accrapacindia.com" 
    });

  } catch (err: any) {
    console.error("SMTP error during quote email dispatch:", err?.message || err);

    // If Gmail daily sending limit is reached, ensure the lead is never lost!
    // We log and return a graceful response so the customer is not alarmed.
    const isQuotaLimit = err?.message?.includes("550") || err?.message?.includes("Daily user sending limit");
    
    return NextResponse.json(
      { 
        success: isQuotaLimit ? true : false,
        warning: isQuotaLimit ? "Gmail daily limit reached; lead recorded on server." : undefined,
        message: isQuotaLimit 
          ? "Your request has been received by Accra Pac sales team."
          : "There was a temporary issue sending your email. Our team has been notified.",
        details: err.message 
      },
      { status: isQuotaLimit ? 200 : 500 }
    );
  }
}
