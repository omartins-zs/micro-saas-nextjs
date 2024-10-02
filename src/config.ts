export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
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