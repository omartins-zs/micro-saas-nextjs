export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    webhookSecret: '',
    plans: {
      free: {
        stripeId: "price_1Q5QGRD86tsvbg9Ztk0d9DQJ",
        quota: {
          TASKS: 5
        }
      },
      pro: {
        stripeId: "price_1Q5QGfD86tsvbg9Z4ZLhR6WL",
        quota: {
          // Task -1 = Ilimitado
          TASKS: 100
        }
      },
    },
    proPriceId: '',
  }
}