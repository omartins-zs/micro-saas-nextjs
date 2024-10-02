'use server'

import { auth } from '@/services/auth'
import { createCheckoutSession } from '@/services/stripe'
import { redirect } from 'next/navigation'

export async function createCheckoutSessionAction() {
  // console.log("123")
  // console.log({ok: true})

  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  const checkoutSession = await createCheckoutSession(
    session.user.id as string,
    session.user.email as string,
  )

  if (!checkoutSession.url) return
  redirect(checkoutSession.url)
}
