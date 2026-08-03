import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      phone,
      email,
      message
    } = data;

    // Create an elegant HTML email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
        <h2 style="color: #2563eb; margin-bottom: 24px;">New Contact Request</h2>
        
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #0f172a; margin-top: 0; font-size: 16px; border-bottom: 1px solid #cbd5e1; padding-bottom: 8px;">Customer Details</h3>
          <p style="margin: 8px 0; color: #334155;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0; color: #334155;"><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p style="margin: 8px 0; color: #334155;"><strong>Email:</strong> ${email}</p>` : ''}
        </div>

        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #0f172a; margin-top: 0; font-size: 16px; border-bottom: 1px solid #cbd5e1; padding-bottom: 8px;">Message</h3>
          <p style="margin: 8px 0; color: #334155; white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="color: #64748b; font-size: 12px; margin-top: 30px; text-align: center;">
          This is an automated message from your Prerna Packers website contact form.
        </p>
      </div>
    `;

    // Only attempt to send if we have a valid key, otherwise just return success to not block UI
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Email was not sent, but API returned success.");
      return NextResponse.json({ success: true, message: "Simulated success (No API Key)" });
    }

    // Send the email to the admin
    const { data: responseData, error } = await resend.emails.send({
      from: 'Prerna Packers <quotes@prernapackers.in>', 
      to: ['pratikrajhans61@gmail.com'], 
      subject: `New Contact Message from ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    // Send a Thank You email to the customer if they provided an email address
    if (email) {
      try {
        await resend.emails.send({
          from: 'Prerna Packers <quotes@prernapackers.in>', 
          to: [email],
          subject: 'We received your message!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2563eb;">Hi ${name},</h2>
              <p>Thank you for reaching out to us. We have received your message and our team will get back to you as soon as possible.</p>
              <br/>
              <p>Best regards,</p>
              <p><strong>The Prerna Packers Team</strong></p>
            </div>
          `
        });
      } catch (custError) {
        console.error("Failed to send customer confirmation email:", custError);
      }
    }

    return NextResponse.json({ success: true, data: responseData });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
