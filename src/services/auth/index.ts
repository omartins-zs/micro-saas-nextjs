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
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
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