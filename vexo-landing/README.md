# VEXO — Landing Page (Interactive 3D Experience)

Landing page premium para a VEXO, plataforma de Creator Commerce.
Construída com Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion,
React Three Fiber (R3F) + drei, GSAP-ready e ShadCN UI.

## Stack

- **Next.js 15** (App Router, Server Actions)
- **React 19** + **TypeScript**
- **Tailwind CSS 3** — paleta customizada (`#030712`, `#0F172A`, `#2563EB`, `#22C55E`)
- **Framer Motion** — animações de scroll, reveal cinematográfico, tilt 3D
- **React Three Fiber + drei** — Hero 3D (Arena Holográfica)
- **React Hook Form + Zod** — validação do formulário VIP
- **ShadCN UI** (Button, Input, Label, Select)

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

Para build de produção:

```bash
npm run build
npm run start
```

## Importante: compatibilidade React 19 + R3F

Este projeto usa **React 19** com **`@react-three/fiber@^9`** e
**`@react-three/drei@^10`** — essas são as versões que suportam React 19.
Não fazer downgrade de `@react-three/fiber` para v8 com React 19 (causa erro
`Cannot read properties of undefined (reading 'ReactCurrentBatchConfig')`).

## Tipografia

Por padrão o projeto usa font stacks locais (Space Grotesk / Inter / JetBrains
Mono com fallbacks de sistema) definidos em `app/globals.css`. Em ambiente com
acesso à internet durante o build, é possível trocar para `next/font/google`
em `app/layout.tsx` — instruções comentadas no topo do `globals.css`.

## Estrutura

```
app/
  layout.tsx          → layout raiz, metadata SEO
  page.tsx            → monta todas as seções
  globals.css         → tokens de design, paleta, utilitários
  sitemap.ts / robots.ts

components/
  3d/
    HeroScene.tsx     → Arena Holográfica 3D (R3F)
    TiltCard.tsx      → card com tilt 3D ao mouse
    Reveal.tsx        → animações de scroll (Framer Motion)
  sections/
    Navbar.tsx
    Hero.tsx
    Problem.tsx       → comparação influenciador vs creator de performance
    Features.tsx      → cards 3D de funcionalidades
    VexoArena.tsx      → ranking estilo esports
    ForCompanies.tsx  → Creator Radar, Watchlist, IA, Tendências
    SocialProof.tsx   → depoimentos placeholder
    FinalCTA.tsx      → formulário VIP (Lista VIP)
    Footer.tsx
  ui/
    button.tsx, input.tsx, label.tsx, select.tsx

lib/
  actions.ts          → Server Action submitVipForm (stub Supabase + Resend)
  validations.ts      → schema Zod do formulário
  utils.ts            → helper cn()
```

## Integração futura (Supabase + Resend)

O Server Action `lib/actions.ts` já está estruturado e comentado com:

1. **Supabase / PostgreSQL** — tabela `vip_signups` (nome, whatsapp, email,
   tiktok, nicho, created_at) via `@supabase/supabase-js` com Service Role Key.
2. **Resend** — envio de e-mail de confirmação ao lead + notificação interna.

Basta instalar os pacotes (`@supabase/supabase-js`, `resend`), configurar as
variáveis de ambiente (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
`RESEND_API_KEY`) e descomentar os blocos indicados.

## Performance & SEO

- Server Components por padrão; apenas componentes interativos usam `"use client"`.
- `HeroScene` (R3F) é carregado via `dynamic(..., { ssr: false })` para não
  bloquear o render inicial.
- Metadata completa (OpenGraph, Twitter Card, robots, sitemap).
- `prefers-reduced-motion` respeitado globalmente.
- Responsivo para mobile e desktop (testado em 390px e 1440px).
