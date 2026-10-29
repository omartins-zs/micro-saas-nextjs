# 🚀 Como Executar o Projeto

Este projeto pode ser executado de duas maneiras:

1. **Via Docker Compose (Recomendado):** Ambiente conteinerizado completo com Next.js 14 Standalone e Nginx reverse proxy otimizado na porta 8080.
2. **Localmente no Host:** Utilizando o Node.js 20+ e npm.

---

## 🧭 Escolha o Modo de Execução

- Para executar rapidamente com containers:
  👉 Consulte o [Guia de Execução com Docker](file:///C:/Projetos/micro-saas-nextjs/docs/COMO_EXECUTAR_DOCKER.md).

- Para rodar diretamente no seu ambiente Node.js:
  👉 Consulte o [Guia de Execução Local](file:///C:/Projetos/micro-saas-nextjs/docs/COMO_EXECUTAR_LOCAL.md).

---

## ⚡ Comandos Rápidos

### Execução via Docker
```bash
# 1. Configurar variáveis de ambiente
cp .env.example .env

# 2. Subir os containers em segundo plano
docker compose up -d --build

# 3. Acessar a aplicação
# http://localhost:8080
```

### Execução Local
```bash
# 1. Instalar dependências
npm install

# 2. Inicializar banco e seed
npx prisma db push
node prisma/seed.mjs

# 3. Iniciar servidor de desenvolvimento
npm run dev
# http://localhost:3000
```

Para credenciais de login e testes rápidos, consulte [`docs/ACESSOS_TESTES.md`](file:///C:/Projetos/micro-saas-nextjs/docs/ACESSOS_TESTES.md).
