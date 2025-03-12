import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    // Parse the request body
    const { name, email, subject, message, phone } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_MAIL_PASSWORD,
      },
    });

    // Prepare mail options with HTML formatting
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_MAIL,
      subject: `Formulario de contacto - ${subject}`,
      text: `Mensaje de ${name} (${email}, ${phone}): ${message}`, // Plain text fallback
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nuevo mensaje desde la landing page SION</h2>
        <p style="margin: 20px 0 10px;"><strong>Nombre:</strong> ${name}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
        <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${phone}</p>
        <p style="margin: 10px 0;"><strong>Asunto:</strong> ${subject}</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0;">
        <p style="margin: 0;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-line; margin: 10px 0 0;">${message}</p>
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 30px;">Este mensaje fue enviado desde el formulario de contacto de la landing page de SION.</p>
      </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
