import { config } from "@/config";
import Stripe from "stripe";


export const stripe = new Stripe(config.stripe.secretKey || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
})
