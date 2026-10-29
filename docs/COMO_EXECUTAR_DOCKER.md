# 🐳 Como Executar com Docker Compose

Instruções para inicialização conteinerizada de alta performance com **Next.js 14 Standalone** e **Nginx Reverse Proxy**.

---

## 🏗️ Arquitetura dos Containers

```
                    ┌─────────────────────────┐
                    │      Nginx (8080)       │
                    │  Reverse Proxy & Cache  │
                    └────────────┬────────────┘
                                 │ HTTP :3000
                    ┌────────────▼────────────┐
                    │   Next.js 14 Standalone │
                    │    (Node 20 Alpine)     │
                    │  SQLite + Prisma ORM    │
                    └─────────────────────────┘
```

---

## 📋 Pré-requisitos

- Docker Desktop instalado e operacional.
- Docker Compose v2.x (`docker compose version`).

---

## 🚀 Passo a Passo

### 1. Configurar Variáveis de Ambiente
Copie o template:
```bash
cp .env.example .env
```
No arquivo `.env`, ative o bloco `# DOCKER`:
```ini
NEXTAUTH_URL="http://localhost:8080"
DATABASE_URL="file:./dev.db"
AUTH_SECRET="eA0q4oR7e4e1aQvQfG5VnjP8t2vG9FfC4hH8tI7L7M"
```

### 2. Construir e Iniciar os Containers
Execute na raiz do projeto:
```bash
docker compose up -d --build
```

### 3. Verificar o Status dos Containers
```bash
docker compose ps
```
Aguarde até que os serviços `microsaas_app` e `microsaas_nginx` estejam com status `Up`.

### 4. Acessar a Aplicação
- **Landing Page:** [http://localhost:8080](http://localhost:8080)
- **Login com Perfis Demo (1 Clique):** [http://localhost:8080/auth](http://localhost:8080/auth)
- **Painel do Assinante:** [http://localhost:8080/app](http://localhost:8080/app)

---

## 🛑 Comandos Úteis

Para pausar:
```bash
docker compose stop
```

Para reiniciar:
```bash
docker compose start
```

Para derrubar e remover os containers:
```bash
docker compose down
```
