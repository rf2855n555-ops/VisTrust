
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'vistrustconsulting@gmail.com',
        pass: process.env.EMAIL_PASS, // You'll need to set this in Vercel
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'vistrustconsulting@gmail.com',
      to: 'vistrustconsulting@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
              <strong>From:</strong> VisTrust Consulting Website
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${company ? `Company: ${company}` : ''}
        
        Message:
        ${message}
        
        Submitted: ${new Date().toLocaleString()}
        From: VisTrust Consulting Website
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Also send a confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER || 'vistrustconsulting@gmail.com',
      to: email,
      subject: 'Thank you for contacting VisTrust Consulting',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting VisTrust Consulting!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Your Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>Best regards,<br>
          The VisTrust Consulting Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
      text: `
        Thank you for contacting VisTrust Consulting!
        
        Dear ${name},
        
        We have received your message and will get back to you within 24 hours.
        
        Your Message:
        ${message}
        
        Best regards,
        The VisTrust Consulting Team
        
        ---
        This is an automated response. Please do not reply to this email.
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We have sent you a confirmation email and will get back to you soon!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Sorry, there was an error submitting your message. Please try again.' },
      { status: 500 }
    )
  }
}
