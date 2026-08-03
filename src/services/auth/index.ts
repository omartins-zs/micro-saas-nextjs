import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database";
import { createStripeCustomer } from "../stripe";
console.log(process.env.EMAIL_SERVER)
export const {
	handlers: { GET, POST },
	auth,
} = NextAuth({
	secret: process.env.AUTH_SECRET || 'dummy_auth_secret_for_build_only',
	pages: {
		signIn: '/auth',
		signOut: '/auth',
		error: '/auth',
		verifyRequest: '/auth',
		newUser: '/app',
	},
	adapter: PrismaAdapter(prisma),
	debug: true,
	providers: [
		EmailProvider({
			server: process.env.EMAIL_SERVER || 'smtp://localhost:25',
			from: process.env.EMAIL_FROM || 'noreply@example.com',
		}),
	],
	events: {
		createUser: async (message) => {
			await createStripeCustomer({
				name: message.user.name as string,
				email: message.user.email as string,
			})
		},
	},
})