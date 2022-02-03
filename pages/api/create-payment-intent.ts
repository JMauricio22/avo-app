import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(
  process.env.STRIPE_SK,
  { apiVersion: '2020-08-27' }
);

export default async function getClientSecret(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    let { subTotal } = req.body;

    subTotal = Math.round(Number(subTotal)) * 100;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent: Stripe.PaymentIntent =
      await stripe.paymentIntents.create({
        amount: subTotal,
        currency: 'USD',
        payment_method_types: ['card']
      });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  }
}
