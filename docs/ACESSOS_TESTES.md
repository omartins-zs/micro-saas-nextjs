# 🔑 Acessos, Credenciais e Roteiro de Testes

Guia consolidado de rotas, portas, credenciais dos seeders e validação do projeto **Micro-SaaS Next.js 14**.

---

## 🌐 URLs dos Serviços

| Serviço | Ambiente Docker | Ambiente Local (Host) | Descrição |
|---|---|---|---|
| **Aplicação Principal** | [http://localhost:8080](http://localhost:8080) | [http://localhost:3000](http://localhost:3000) | Landing page e portal do SaaS |
| **Login / Autenticação** | [http://localhost:8080/auth](http://localhost:8080/auth) | [http://localhost:3000/auth](http://localhost:3000/auth) | Formulário e botões de login em 1 clique |
| **Dashboard / App** | [http://localhost:8080/app](http://localhost:8080/app) | [http://localhost:3000/app](http://localhost:3000/app) | Painel protegido do usuário e tarefas |
| **Configurações / Billing** | [http://localhost:8080/app/settings/billing](http://localhost:8080/app/settings/billing) | [http://localhost:3000/app/settings/billing](http://localhost:3000/app/settings/billing) | Gestão de plano, quotas e Stripe |
| **Health Check** | [http://localhost:8080/api/health](http://localhost:8080/api/health) | [http://localhost:3000/api/health](http://localhost:3000/api/health) | Diagnóstico da aplicação e status do Prisma |

---

## 👥 Credenciais dos Usuários de Teste (Seeders)

Todos os usuários contam com senha padrão `Password@123` e botões de **login rápido em 1 clique** na tela `/auth`:

| Perfil | Nome | E-mail | Senha | Plano / Quota |
|---|---|---|---|---|
| **Admin** | Administrador Geral | `admin@microsaas.com` | `Password@123` | **Plano Pro** (100 tarefas, status ativo) |
| **Gerente** | Gerente de Operações | `gerente@microsaas.com` | `Password@123` | **Plano Pro** (100 tarefas, status ativo) |
| **Operador** | Operador de Suporte | `operador@microsaas.com` | `Password@123` | **Plano Free** (5 tarefas) |

---

## 🧪 Roteiro de Validação e Testes Ponta a Ponta

### 1. Teste de Health Check
Verifique a integridade do backend via navegador ou cURL:
```bash
curl http://localhost:8080/api/health
```
Resposta esperada:
```json
{
  "status": "ok",
  "app": "micro-saas-nextjs",
  "framework": "Next.js 14 (App Router)",
  "database": "connected",
  "timestamp": "2026-10-28T22:30:00.000Z"
}
```

### 2. Teste de Login em 1 Clique
1. Acesse [http://localhost:8080/auth](http://localhost:8080/auth).
2. Na seção **Ou Login Rápido (1 Clique)**, clique em **Administrador Geral**.
3. O sistema autenticará imediatamente e redirecionará para `/app`.
4. Observe na barra lateral os dados do usuário, avatar e o plano ativo.

### 3. Teste de Gestão de Tarefas
1. No painel `/app`, digite uma nova tarefa no campo de input.
2. Pressione **Enter** ou clique em **Adicionar**.
3. Valide a criação da tarefa e a atualização da barra de quota do plano.

### 4. Teste de Logout
1. No rodapé da barra lateral esquerda, clique no menu do usuário.
2. Selecione **Sair da Conta**.
3. A sessão será encerrada e você será redirecionado para a tela `/auth`.
