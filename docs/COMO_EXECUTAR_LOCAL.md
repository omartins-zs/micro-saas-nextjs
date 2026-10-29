# 💻 Como Executar Localmente (Host)

Instruções para configurar e executar o projeto **Micro-SaaS Next.js 14** diretamente na sua máquina física sem o Docker.

---

## 🖥️ Ambiente de referência (máquina de desenvolvimento)

| Item | Especificação |
|---|---|
| **Sistema Operacional** | Windows 11 Pro 64-bit |
| **Shell** | PowerShell 7 / Windows Terminal |
| **Node.js** | v20.x ou superior |
| **Gerenciador de Pacotes** | npm 10.x |
| **Banco de Dados** | SQLite via Prisma (`dev.db`) |
| **Porta da Aplicação** | `3000` |

---

## 📋 Pré-requisitos

1. **Node.js 20+** instalado no host (`node -v`).
2. **npm** instalado (`npm -v`).

---

## 🔧 Passo a Passo

### 1. Configurar o Arquivo .env
Copie o template:
```bash
cp .env.example .env
```
Certifique-se de que o bloco `# LOCAL` está ativo no arquivo `.env`:
```ini
NEXTAUTH_URL="http://localhost:3000"
DATABASE_URL="file:./dev.db"
AUTH_SECRET="eA0q4oR7e4e1aQvQfG5VnjP8t2vG9FfC4hH8tI7L7M"
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Sincronizar o Banco de Dados e Rodar os Seeds
```bash
npx prisma generate
npx prisma db push
node prisma/seed.mjs
```

### 4. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

### 5. Acessar o Sistema
Abra seu navegador em:
- **Landing Page:** [http://localhost:3000](http://localhost:3000)
- **Login com Perfis Demo:** [http://localhost:3000/auth](http://localhost:3000/auth)

Para detalhes sobre os usuários demo, consulte [`docs/ACESSOS_TESTES.md`](file:///C:/Projetos/micro-saas-nextjs/docs/ACESSOS_TESTES.md).
