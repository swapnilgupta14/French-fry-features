import { Resend } from 'resend';

const resend = new Resend("re_gCPFbBzq_AK6WfFAVhAAFTz1tYrCL2LNJ");

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, recipient } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Your Website <noreply@yourdomain.com>',
      to: recipient,
      subject: `New Message from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      return res.status(500).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}