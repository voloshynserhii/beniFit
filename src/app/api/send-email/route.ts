import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/resend';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: 'Invalid input.' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'BeniFit Contact <contact@beni-fit.club>',
      to: ['benifit.coach@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>`,
      replyTo: email,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!', data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
