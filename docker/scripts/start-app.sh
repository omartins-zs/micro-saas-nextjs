#!/bin/sh
set -e

echo "[Micro-SaaS] Inicializando aplicacao..."

# Garantir banco de dados e geracao de tabelas
echo "[Micro-SaaS] Sincronizando schema do banco de dados (Prisma)..."
npx prisma db push --skip-generate || true

# Executar seed dos usuarios demonstrativos
echo "[Micro-SaaS] Semeando usuarios de demonstracao..."
node prisma/seed.mjs || true

echo "[Micro-SaaS] Inicializando servidor Next.js..."
if [ -f "server.js" ]; then
  exec node server.js
else
  exec npm run start
fi
