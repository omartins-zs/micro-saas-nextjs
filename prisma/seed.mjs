import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando seed do Micro-SaaS...')

  // Limpar dados anteriores para idempotência
  await prisma.todo.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()

  // 1. Admin (Plano Pro)
  const admin = await prisma.user.create({
    data: {
      id: 'usr_admin_001',
      name: 'Administrador Geral',
      email: 'admin@microsaas.com',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      stripeCustomerId: 'cus_demo_admin',
      stripeSubscriptionId: 'sub_demo_admin',
      stripeSubscriptionStatus: 'active',
      stripePriceId: 'price_1Q5QGfD86tsvbg9Z4ZLhR6WL',
      todos: {
        create: [
          { title: 'Revisar métricas de receita recorrente mensal (MRR)' },
          { title: 'Aprovar novos modelos de IA para clientes enterprise' },
          { title: 'Conferir logs de infraestrutura e deployment Docker', doneAt: new Date() }
        ]
      }
    }
  })

  // 2. Gerente (Plano Pro)
  const gerente = await prisma.user.create({
    data: {
      id: 'usr_gerente_002',
      name: 'Gerente de Operações',
      email: 'gerente@microsaas.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      stripeCustomerId: 'cus_demo_gerente',
      stripeSubscriptionId: 'sub_demo_gerente',
      stripeSubscriptionStatus: 'active',
      stripePriceId: 'price_1Q5QGfD86tsvbg9Z4ZLhR6WL',
      todos: {
        create: [
          { title: 'Acompanhar onboarding dos novos assinantes' },
          { title: 'Organizar sprint da equipe de suporte e produto' }
        ]
      }
    }
  })

  // 3. Operador (Plano Free)
  const operador = await prisma.user.create({
    data: {
      id: 'usr_operador_003',
      name: 'Operador de Suporte',
      email: 'operador@microsaas.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      stripeCustomerId: 'cus_demo_operador',
      stripeSubscriptionId: 'sub_demo_operador',
      stripeSubscriptionStatus: 'active',
      stripePriceId: 'price_1Q5QGRD86tsvbg9Ztk0d9DQJ',
      todos: {
        create: [
          { title: 'Responder tickets de suporte prioritários' },
          { title: 'Atualizar base de conhecimento da documentação' }
        ]
      }
    }
  })

  console.log(`Seed concluído com sucesso:`)
  console.log(`- Admin: ${admin.email}`)
  console.log(`- Gerente: ${gerente.email}`)
  console.log(`- Operador: ${operador.email}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
