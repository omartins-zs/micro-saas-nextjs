import Link from 'next/link'
import { CheckIcon, ArrowRightIcon, RocketIcon, LightningBoltIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'TaskFlow — Organize suas tarefas com eficiência',
  description: 'TaskFlow é um micro SaaS de gerenciamento de tarefas moderno com autenticação segura, planos flexíveis e integração com Stripe.',
}

const features = [
  {
    icon: <RocketIcon className="w-6 h-6" />,
    title: 'Login sem senha',
    description: 'Acesse com seu e-mail via Magic Link. Sem senhas para lembrar, sem complicação.',
  },
  {
    icon: <LightningBoltIcon className="w-6 h-6" />,
    title: 'Produtividade total',
    description: 'Crie, organize e acompanhe suas tarefas em tempo real com uma interface intuitiva.',
  },
  {
    icon: <LockClosedIcon className="w-6 h-6" />,
    title: 'Seguro e confiável',
    description: 'Autenticação com NextAuth v5, dados isolados por usuário e pagamentos via Stripe.',
  },
]

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: 'para sempre',
    description: 'Perfeito para começar a organizar sua vida.',
    features: ['Até 5 tarefas', 'Autenticação Magic Link', 'Dashboard de tarefas', 'Tema claro e escuro'],
    cta: 'Começar grátis',
    href: '/auth',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 'R$ 9',
    period: 'por mês',
    description: 'Para quem leva produtividade a sério.',
    features: ['Até 100 tarefas', 'Tudo do plano Free', 'Suporte prioritário', 'Acesso antecipado a novidades'],
    cta: 'Assinar Pro',
    href: '/auth',
    highlighted: true,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <CheckIcon className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">TaskFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Planos</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth">Entrar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth">
                Começar grátis <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-28 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            🚀 Micro SaaS de Tarefas
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Organize.<br />Foque.<br />Entregue.
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            TaskFlow é a forma mais simples e segura de gerenciar suas tarefas. Login com Magic Link, planos acessíveis e interface moderna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base px-8">
              <Link href="/auth">
                Começar grátis agora <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8">
              <Link href="#pricing">Ver planos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Funcionalidades</Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Tudo que você precisa para ser produtivo
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Uma solução completa para gerenciar tarefas com segurança, simplicidade e escalabilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Planos</Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Simples e transparente
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Comece grátis e faça upgrade quando precisar de mais poder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col transition-all ${
                  plan.highlighted
                    ? 'border-primary shadow-lg shadow-primary/10 scale-105'
                    : 'border-border hover:border-primary/40'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-md">
                      ⭐ Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2 text-sm">/ {plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckIcon className="w-3 h-3 text-primary" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                  >
                    <Link href={plan.href}>
                      {plan.cta} <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Pronto para ser mais produtivo?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Junte-se a outros usuários que já organizam suas tarefas com TaskFlow. Comece grátis, sem cartão de crédito.
          </p>
          <Button size="lg" asChild className="text-base px-10">
            <Link href="/auth">
              Criar minha conta <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
              <CheckIcon className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">TaskFlow</span>
          </div>
          <p>© {new Date().getFullYear()} TaskFlow. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/auth" className="hover:text-foreground transition-colors">Entrar</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Planos</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}