'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from '@/hooks/use-toast'
import { ShieldCheck, Users, Headphones, Zap, Loader2 } from 'lucide-react'

export function AuthForm() {
  const form = useForm<{ email: string }>()
  const [loadingDemo, setLoadingDemo] = useState<string | null>(null)

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })

      toast({
        title: 'Magic Link Enviado!',
        description: 'Verifique sua caixa de entrada para fazer login.'
      })
    } catch (error) {
      toast({
        title: 'Erro ao enviar Magic Link',
        description: 'Ocorreu uma falha no envio. Tente o login rápido abaixo.',
        variant: 'destructive',
      })
    }
  })

  const handleQuickLogin = async (email: string, roleName: string) => {
    try {
      setLoadingDemo(email)
      const res = await signIn('credentials', {
        email,
        password: 'Password@123',
        callbackUrl: '/app',
      })

      if (res?.error) {
        toast({
          title: 'Erro ao conectar',
          description: 'Não foi possível autenticar o perfil de teste.',
          variant: 'destructive',
        })
      } else {
        toast({
          title: `Conectado como ${roleName}`,
          description: 'Redirecionando para o painel principal...',
        })
      }
    } catch (err) {
      toast({
        title: 'Erro de conexão',
        description: 'Falha ao autenticar.',
        variant: 'destructive',
      })
    } finally {
      setLoadingDemo(null)
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-6 rounded-2xl border bg-card p-6 shadow-xl sm:p-8">
      <div className="space-y-2 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
          <Zap className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Acessar Micro-SaaS</h1>
        <p className="text-sm text-muted-foreground">
          Entre com seu e-mail para receber um link mágico ou use um dos perfis de demonstração.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-semibold uppercase text-muted-foreground">
            E-mail
          </Label>
          <Input
            id="email"
            placeholder="seu.email@empresa.com"
            required
            type="email"
            className="h-11"
            {...form.register('email')}
          />
        </div>
        <Button
          className="w-full h-11 font-semibold"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando Magic Link...
            </>
          ) : (
            'Receber Magic Link por E-mail'
          )}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-3 text-muted-foreground font-semibold">
            Ou Login Rápido (1 Clique)
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        <Button
          type="button"
          variant="outline"
          className="w-full h-12 justify-between border-red-200 hover:bg-red-50 hover:text-red-900 dark:border-red-900/50 dark:hover:bg-red-950/30"
          onClick={() => handleQuickLogin('admin@microsaas.com', 'Administrador Geral')}
          disabled={!!loadingDemo}
        >
          <div className="flex items-center text-left">
            <ShieldCheck className="mr-3 h-5 w-5 text-red-600" />
            <div>
              <div className="font-semibold text-sm">Administrador Geral</div>
              <div className="text-[11px] text-muted-foreground">admin@microsaas.com</div>
            </div>
          </div>
          {loadingDemo === 'admin@microsaas.com' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100 dark:bg-red-950 px-2 py-0.5 rounded">
              Plano Pro
            </span>
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full h-12 justify-between border-blue-200 hover:bg-blue-50 hover:text-blue-900 dark:border-blue-900/50 dark:hover:bg-blue-950/30"
          onClick={() => handleQuickLogin('gerente@microsaas.com', 'Gerente de Operações')}
          disabled={!!loadingDemo}
        >
          <div className="flex items-center text-left">
            <Users className="mr-3 h-5 w-5 text-blue-600" />
            <div>
              <div className="font-semibold text-sm">Gerente de Operações</div>
              <div className="text-[11px] text-muted-foreground">gerente@microsaas.com</div>
            </div>
          </div>
          {loadingDemo === 'gerente@microsaas.com' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">
              Plano Pro
            </span>
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full h-12 justify-between border-green-200 hover:bg-green-50 hover:text-green-900 dark:border-green-900/50 dark:hover:bg-green-950/30"
          onClick={() => handleQuickLogin('operador@microsaas.com', 'Operador de Suporte')}
          disabled={!!loadingDemo}
        >
          <div className="flex items-center text-left">
            <Headphones className="mr-3 h-5 w-5 text-green-600" />
            <div>
              <div className="font-semibold text-sm">Operador de Suporte</div>
              <div className="text-[11px] text-muted-foreground">operador@microsaas.com</div>
            </div>
          </div>
          {loadingDemo === 'operador@microsaas.com' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider text-green-600 bg-green-100 dark:bg-green-950 px-2 py-0.5 rounded">
              Plano Free
            </span>
          )}
        </Button>
      </div>
    </div>
  )
}
