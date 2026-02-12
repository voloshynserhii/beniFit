'use server';

import { resend } from '@/resend';

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    const data = await resend.emails.send({
      from: 'BeniFit <onboarding@beni-fit.club>',
      to: [email],
      subject: 'Welcome to BeniFit!',
      html: `<h1>Hi ${name}!</h1><p>Ready to start your transformation?</p>`,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
