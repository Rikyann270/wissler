import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, formType, details } = data;

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rikyann270@gmail.com",
        pass: "qgwk jmvt uewa pzne",
      },
    });

    const topicLabel =
      formType === "general"
        ? "General Shipping Advice"
        : formType === "customs"
          ? "Customs & Commodity Codes"
          : formType === "oversized"
            ? "Oversized & Special Cargo Routing"
            : "First-time Exporter Support";

    // Create email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #0b1c3f; border-bottom: 2px solid #e9a115; padding-bottom: 10px; margin-top: 0;">New Advisory Brief Request</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555555; width: 40%;">Name:</td>
            <td style="padding: 8px 0; color: #111111;">${name}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Email Address:</td>
            <td style="padding: 8px 0; color: #111111;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Company:</td>
            <td style="padding: 8px 0; color: #111111;">${company || "Not specified"}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Advisory Topic:</td>
            <td style="padding: 8px 0; color: #111111;">${topicLabel}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #f0f0f0;">
          <h4 style="color: #0b1c3f; margin-bottom: 8px; margin-top: 0;">Challenge details:</h4>
          <p style="color: #333333; line-height: 1.5; margin: 0; background-color: #f9f9f9; padding: 10px; border-radius: 4px;">
            ${details ? details.replace(/\n/g, "<br>") : "No details provided."}
          </p>
        </div>
        
        <div style="margin-top: 30px; font-size: 11px; color: #888888; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
          This inquiry was sent from the Wissler Cargo Shipping Guidance Advisory Request Form.
        </div>
      </div>
    `;

    // Send email to info@wisslercargo.com
    await transporter.sendMail({
      from: '"Wissler Cargo Advisory" <rikyann270@gmail.com>',
      to: "info@wisslercargo.com",
      replyTo: email,
      subject: `Advisory Brief Requested: ${topicLabel} - from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Advisory request sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
