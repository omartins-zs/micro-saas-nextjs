import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database";

// Verifique se a importação de NextAuth está correta
// Certifique-se de que NextAuth é importado corretamente e que a configuração está correta
const {
	handlers: { GET, POST }, // Verifique se handlers GET e POST estão sendo retornados corretamente
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
			from: process.env.EMAIL_FROM
		}),
	],
});

export { GET, POST, auth }; // Certifique-se de exportar GET e POST corretamente
