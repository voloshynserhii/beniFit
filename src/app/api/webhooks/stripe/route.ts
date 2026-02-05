import { stripe } from '@/app/stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === 'checkout.session.completed') {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    // TODO: Update the user's status in your database (e.g., Prisma, Supabase)
    // await db.user.update({ where: { id: session.client_reference_id }, data: { ... } });
    console.log(`Payment successful for user: ${session.client_reference_id}`);
  }

  return new NextResponse(null, { status: 200 });
}