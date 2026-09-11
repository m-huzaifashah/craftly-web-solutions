import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (name, email, message).',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    })
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || 'craftlywebsolutions@gmail.com'
  const senderEmail = process.env.EMAIL_USER || 'craftlywebsolutions@gmail.com'
  const senderPass = process.env.EMAIL_PASS

  console.log(`[Contact Form] Received message from: ${name} <${email}> for [${projectType}]`)

  // Check if SMTP credentials exist
  if (!senderPass) {
    console.warn(
      '⚠️ [Nodemailer Warning]: EMAIL_PASS is not set in environment. Running in mock/development mode. Email logged successfully to console.'
    )
    return res.json({
      success: true,
      message: 'Message received successfully! (Running in development mode without SMTP credentials)',
      devMode: true,
    })
  }

  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: senderPass,
      },
    })

    // Prepare email HTML template
    const mailOptions = {
      from: `"Craftly Web Leads" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `🚀 New Project Inquiry from ${name} [${projectType || 'General Inquiry'}]`,
      text: `
New Project Inquiry Received via Craftly Web:

Name: ${name}
Email: ${email}
Project Type: ${projectType || 'Not specified'}
Date: ${new Date().toLocaleString()}

Message:
${message}
      `,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0a0f1d; color: #f1f5f9; padding: 32px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #1e2f47;">
          <div style="border-bottom: 1px solid #1e2f47; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #38bdf8; font-size: 22px; margin: 0; font-weight: 700;">Craftly<span style="color: #22d3ee;">.web</span> — New Lead</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0 0;">Received on ${new Date().toLocaleString()}</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 120px;">Client Name:</td>
              <td style="padding: 8px 0; color: #f8fafc; font-size: 14px; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email Address:</td>
              <td style="padding: 8px 0; color: #38bdf8; font-size: 14px;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Project Scope:</td>
              <td style="padding: 8px 0; color: #34d399; font-size: 14px; font-weight: 600;">${projectType || 'General'}</td>
            </tr>
          </table>

          <div style="background-color: #111c2e; border: 1px solid #1e2f47; padding: 18px; border-radius: 8px; margin-bottom: 24px;">
            <p style="color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: bold; margin: 0 0 8px 0; letter-spacing: 0.05em;">Client Message / Requirements:</p>
            <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; border-top: 1px solid #1e2f47; padding-top: 20px;">
            <a href="mailto:${email}?subject=Re:%20Your%20Project%20Inquiry%20with%20Craftly%20Web" style="display: inline-block; background: linear-gradient(135deg, #22d3ee, #0ea5e9); color: #071321; font-weight: bold; font-size: 13px; padding: 12px 24px; border-radius: 6px; text-decoration: none;">
              Reply Directly to ${name}
            </a>
          </div>
        </div>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully via Nodemailer. MessageId:', info.messageId)

    return res.json({
      success: true,
      message: 'Your message has been sent to Craftly Web. We will reply within 24 hours!',
    })
  } catch (error) {
    console.error('❌ Error sending email via Nodemailer:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to dispatch email. Please try again or reach out directly at craftlywebsolutions@gmail.com.',
      details: error.message,
    })
  }
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`🚀 Craftly Web Server running on port ${PORT}`)
  console.log(`📧 Recipient Email: ${process.env.RECIPIENT_EMAIL || 'craftlywebsolutions@gmail.com'}`)
})
