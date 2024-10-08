<h1 align="center"><img align="left" height="40" width="45" src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original-wordmark.svg">
  Micro SaaS - Next.js 14 <img align="right" height="40" width="45" src="https://github.com/devicons/devicon/blob/master/icons/prisma/prisma-original.svg"></h1>

 <div align="center">

 
  Micro SaaS de Tarefas desenvolvido com Next.js 14, Shadcn UI, Prisma e Next Auth.

</div>



<div align="center">
  
  <cite>`Um projeto SaaS focado em autenticação e login com magic link, gerenciamento de usuários, e integração com Stripe para assinaturas, utilizando o padrão de componentes (Composition Pattern).`</cite>
  
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/React--Hook--Form-EC5990?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white"/>
  <img src="https://img.shields.io/badge/Nodemailer-0A080C?style=for-the-badge&logo=nodemailer&logoColor=white"/>
</p>

<h4 align="center">
   ✅ Micro SaaS - Next.js 🚀 Concluído ✅
</h4>


 <div align="center">

   <cite align="center">`http://localhost:5000`</cite>

</div>


## 🔥 **Pré-requisitos**

- [Node.js](https://nodejs.org/)
- [npx](https://www.npmjs.com/package/npx)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

## 🚀✔️ Tecnologias e Ferramentas Utilizadas
- **Next.js** para desenvolvimento de aplicações web com React
- **Shadcn UI** para componentes UI flexíveis
- **Prisma** como ORM para acesso ao banco de dados
- **NextAuth.js** para autenticação e gerenciamento de sessões
- **React Hook Form** para gerenciamento de formulários no frontend
- **Stripe** para implementação de pagamentos e assinaturas
- **Nodemailer** para envio de emails
- **[v0.dev](https://v0.dev/)** para criar interfaces web incríveis com IA

## 🔨🔮 Funcionalidades
- Autenticação de usuários com NextAuth.js
- Integração com Stripe para planos de assinatura (Free e Pro)
- Formulários gerenciados com React Hook Form
- Integração com Prisma para gerenciamento do banco de dados
- Interface de usuário dinâmica com Shadcn UI

<hr>

<!-- <div align="center">
  <h3><i>Documentação e Layout</i></h3>
  <img align="center" src="./DocumentacaoSaasNext.png" alt="Documentação do Projeto">
</div> -->

## 📝 Pacotes do Nuget e Extensões

<i>

- **Prisma** - ORM para manipulação do banco de dados
- **NextAuth.js** - Gerenciamento de autenticação e sessões
- **React Hook Form** - Gerenciamento de formulários com validação
- **Stripe** - Integração para processamento de pagamentos
- **Nodemailer** - Envio de emails de confirmação de cadastro
- **ESLint Rocketseat Config** - Configuração do ESLint para padronização de código
- **Tanstack React Table** - Gerenciamento de tabelas no frontend
 

</i>

<br>
 
## Comandos 👨‍💻💻  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
```bash

# Criar um projeto Next.js
$ npx create-next-app@latest micro-saas-nextjs

# Instalar dependências do Shadcn UI
$ npx shadcn-ui@latest init
$ npx shadcn-ui@latest add

# Instalar bibliotecas de formulário e autenticação
$ npm install react-hook-form
$ npm install next-auth@beta

# Instalar e configurar Prisma
$ npm install prisma --save-dev
$ npx prisma init
$ npx prisma migrate dev --name init
$ npm install @auth/prisma-adapter

# Instalar Nodemailer para envio de emails
$ npm install nodemailer

# Abrir Prisma Studio
$ npx prisma studio

# Gerar chave secreta para NextAuth
$ openssl rand -base64 32

# Inicializar o Stripe CLI e configurar webhook
$ stripe listen --forward-to localhost:3000/api/stripe/webhook

# Iniciar o servidor de desenvolvimento Next.js
$ npm run dev
# ou
$ yarn dev
# ou
$ pnpm dev
# ou
$ bun dev
```

## Melhorias Futuras:

<details>
  <summary>Implementar melhorias na autenticação</summary>

- [ ] Melhorar a lógica de autenticação com NextAuth.js v5
- [ ] Adicionar testes unitários e integração

</details>


## 🖋️ Dicas

* Documentação oficial para [Next.js](https://nextjs.org/docs/getting-started)

<hr>
<div align="center">

Feito com ❤️ por [Gabriel Martins](https://www.linkedin.com/in/gabriel-martins-0479811b0/) Micro SaaS com Next.js 👋
 
 </div>
