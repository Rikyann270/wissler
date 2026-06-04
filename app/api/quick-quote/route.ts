import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      service,
      name,
      company,
      email,
      phone,
      collection,
      delivery,
      cargo,
      weight,
      volume,
      date,
      notes,
    } = data;

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rikyann270@gmail.com",
        pass: "qgwk jmvt uewa pzne",
      },
    });

    // Create email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #0b1c3f; border-bottom: 2px solid #e9a115; padding-bottom: 10px; margin-top: 0;">New Quick Quote Request</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555555; width: 40%;">Service Type:</td>
            <td style="padding: 8px 0; color: #111111;">${service || "Not specified"}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Client Name:</td>
            <td style="padding: 8px 0; color: #111111;">${name}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Company:</td>
            <td style="padding: 8px 0; color: #111111;">${company || "Not specified"}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Email Address:</td>
            <td style="padding: 8px 0; color: #111111;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Phone Number:</td>
            <td style="padding: 8px 0; color: #111111;">${phone}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Collection Location:</td>
            <td style="padding: 8px 0; color: #111111;">${collection}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Delivery Location:</td>
            <td style="padding: 8px 0; color: #111111;">${delivery}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Cargo Description:</td>
            <td style="padding: 8px 0; color: #111111;">${cargo}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Total Weight:</td>
            <td style="padding: 8px 0; color: #111111;">${weight ? `${weight} kg` : "Not specified"}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Volume:</td>
            <td style="padding: 8px 0; color: #111111;">${volume ? `${volume} CBM` : "Not specified"}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Preferred Date:</td>
            <td style="padding: 8px 0; color: #111111;">${date || "Not specified"}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #f0f0f0;">
          <h4 style="color: #0b1c3f; margin-bottom: 8px; margin-top: 0;">Additional Notes:</h4>
          <p style="color: #333333; line-height: 1.5; margin: 0; background-color: #f9f9f9; padding: 10px; border-radius: 4px;">
            ${notes ? notes.replace(/\n/g, "<br>") : "No additional notes provided."}
          </p>
        </div>
        
        <div style="margin-top: 30px; font-size: 11px; color: #888888; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
          This inquiry was sent from the Wissler Cargo Quick Quote Form.
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: '"Wissler Cargo" <rikyann270@gmail.com>',
      to: "kixural@gmail.com",
      replyTo: email,
      subject: `New Quick Quote Request from ${name} (${service || "Logistics Request"})`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Quote request sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
