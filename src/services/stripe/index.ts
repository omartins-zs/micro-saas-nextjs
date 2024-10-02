import { config } from "@/config";
import Stripe from "stripe";
import { prisma } from "../database";


export const stripe = new Stripe(config.stripe.secretKey || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
})

export const getStripeCustomerByEmail = async (email: string) => {
  const customers = await stripe.customers.list({ email });
  return customers.data[0];
}

export const createStripeCustomer = async (
  input: {
    name?: string,
    email: string
  }
) => {
  let customer = await getStripeCustomerByEmail(input.email)
  if (customer) return customer

  return stripe.customers.create({
    email: input.email,
    name: input.name
  });
}

export const createCheckoutSession = async (userId: string, userEmail: string) => {
  try {
    let customer = await createStripeCustomer({
      email: userEmail
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      client_reference_id: userId,
      customer: customer.id,
      success_url: `http://localhost:3000/app/settings/billing?success=true`,
      cancel_url: `http://localhost:3000/app/settings/billing?success=false`,
      line_items: [{
        price: config.stripe.plans.pro.stripeId,
        quantity: 1
      }],
    });

    return {
      url: session.url
    }
  } catch (error) {
    throw new Error('Error to create checkout session')
  }
}
