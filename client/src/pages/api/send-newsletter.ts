import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vincent@uncommon.org',
        pass: 'lfys vkeb wfln amlg',
      },
    });

    await transporter.sendMail({
      from: 'vincent@uncommon.org',
      to: 'vincent@uncommon.org',
      subject: 'New Newsletter Subscription',
      html: `<p>New subscriber: <strong>${email}</strong></p>`
    });

    return res.status(200).json({ message: 'Thank you for subscribing!' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send subscription email', error });
  }
} 