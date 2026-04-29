'use server'

import { Resend } from 'resend'

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — real users leave it blank. Bots fill it.
  const honeypot = String(formData.get('company_url') ?? '').trim()
  if (honeypot) {
    return { status: 'success' } // silently drop
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || name.length > 200) {
    return { status: 'error', message: 'Please enter your name.' }
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return { status: 'error', message: 'Please enter a valid email.' }
  }
  if (!message || message.length < 10) {
    return { status: 'error', message: 'Tell us a little more (at least 10 characters).' }
  }
  if (message.length > 5000) {
    return { status: 'error', message: 'Please keep the message under 5,000 characters.' }
  }
  if (company.length > 200) {
    return { status: 'error', message: 'Company name is too long.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Co-Lab Contact <notifications@colabapp.ai>'
  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'lukas.keen.a@gmail.com'

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return {
      status: 'error',
      message: 'Email is temporarily unavailable. Please try again later.',
    }
  }

  const resend = new Resend(apiKey)

  const subject = `Co-Lab contact: ${name}${company ? ` (${company})` : ''}`
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0B0E1A; max-width: 560px;">
      <h2 style="font-size: 18px; margin: 0 0 16px;">New contact form submission</h2>
      <table style="font-size: 14px; line-height: 1.5; border-collapse: collapse;">
        <tr><td style="padding: 4px 16px 4px 0; color: #71768B;">Name</td><td style="padding: 4px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #71768B;">Email</td><td style="padding: 4px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#5B5BD6;">${escapeHtml(email)}</a></td></tr>
        ${company ? `<tr><td style="padding: 4px 16px 4px 0; color: #71768B;">Company</td><td style="padding: 4px 0;">${escapeHtml(company)}</td></tr>` : ''}
      </table>
      <hr style="border: none; border-top: 1px solid #E7E7EE; margin: 20px 0;" />
      <pre style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</pre>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
      html,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return {
        status: 'error',
        message: 'Could not send your message. Please try again.',
      }
    }

    return { status: 'success' }
  } catch (err) {
    console.error('[contact] unexpected error:', err)
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
    }
  }
}
