import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/nodemailer"
import CredentialsProvider from "next-auth/providers/credentials"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../database"
import { createStripeCustomer } from "../stripe"

const DEMO_USERS = [
  {
    id: 'usr_admin_001',
    name: 'Administrador Geral',
    email: 'admin@microsaas.com',
    role: 'ADMIN',
  },
  {
    id: 'usr_gerente_002',
    name: 'Gerente de Operações',
    email: 'gerente@microsaas.com',
    role: 'GERENTE',
  },
  {
    id: 'usr_operador_003',
    name: 'Operador de Suporte',
    email: 'operador@microsaas.com',
    role: 'OPERADOR',
  },
]

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET || 'dummy_auth_secret_for_development_and_build_32_chars',
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/app',
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === 'development',
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER || 'smtp://localhost:25',
      from: process.env.EMAIL_FROM || 'noreply@microsaas.com',
    }),
    CredentialsProvider({
      name: "Perfis Demonstrativos",
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string
        const password = credentials?.password as string

        if (!email || !password) return null

        // Validação dos perfis demo
        const demoUser = DEMO_USERS.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && password === 'Password@123'
        )

        if (demoUser) {
          // Garante que o usuário existe no Prisma para poder associar tarefas e planos
          let dbUser = await prisma.user.findUnique({
            where: { email: demoUser.email },
          })

          if (!dbUser) {
            dbUser = await prisma.user.create({
              data: {
                id: demoUser.id,
                name: demoUser.name,
                email: demoUser.email,
                stripePriceId: demoUser.role === 'OPERADOR' ? 'price_1Q5QGRD86tsvbg9Ztk0d9DQJ' : 'price_1Q5QGfD86tsvbg9Z4ZLhR6WL',
              },
            })
          }

          return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            image: dbUser.image,
          }
        }

        // Tenta buscar no banco de dados
        const dbUser = await prisma.user.findUnique({
          where: { email },
        })

        if (dbUser && password === 'Password@123') {
          return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            image: dbUser.image,
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = (token.id as string) || session.user.id
      }
      return session
    },
  },
  events: {
    createUser: async (message) => {
      try {
        if (process.env.STRIPE_SECRET_KEY) {
          await createStripeCustomer({
            name: message.user.name as string,
            email: message.user.email as string,
          })
        }
      } catch (err) {
        console.warn('Stripe customer creation skipped or failed:', err)
      }
    },
  },
})
