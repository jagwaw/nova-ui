# NovaUI

> Fintech & support SaaS component library built on **Vuetify 3** — portfolio demo for SDK-quality UI work.

[![Live demo](https://img.shields.io/badge/demo-Vercel-8b5cf6)](https://nova-ui.vercel.app)
[![Stack](https://img.shields.io/badge/Nuxt-3-00DC82)](https://nuxt.com)
[![Vuetify](https://img.shields.io/badge/Vuetify-3-1867C0)](https://vuetifyjs.com)

## Problem

Agent consoles and client SDKs need a **consistent component layer** on top of Vuetify — not one-off `v-btn` tweaks per screen. NovaUI demonstrates how I'd own that layer: typed APIs, fintech density, agent-alert variants, and docs that read like a publishable package.

## Features

- **3 core components** (session 1): `NvButton`, `NvInput`, `NvDialog`
- **Design tokens** page — colors, spacing, typography, elevation mapped to Vuetify theme + SCSS
- **Component docs** — live preview, variants, disabled/loading/error states, Do/Don't, a11y notes, props/emits tables
- **Copy-to-clipboard** code snippets
- **Dark theme default** with light/dark toggle (violet/indigo palette)
- **Fictional brand** — NovaDesk / NovaUI; synthetic data only

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Nuxt 3, Vue 3, TypeScript (strict) |
| UI | Vuetify 3 (`vuetify-nuxt-module`) |
| Styling | SCSS tokens in `assets/styles/nova/` |
| Fonts | Space Grotesk, Inter, JetBrains Mono |
| Deploy | Vercel (SSR via `nuxt build`) |

## Quick start

Requires **Node 20** (`nvm use`).

```bash
git clone https://github.com/jagwaw/nova-ui.git
cd nova-ui
npm install
npm run dev    # http://localhost:3000
npm run build
npm run preview
```

## Live demo

**URL:** `https://nova-ui.vercel.app` *(placeholder — deploy and update)*

## Screenshots

| Home | NvButton docs | Tokens |
|------|---------------|--------|
| *screenshot-home.png* | *screenshot-button.png* | *screenshot-tokens.png* |

> Add screenshots to `public/screenshots/` after first deploy.

## Philosophy

- **Clarity** — small, typed components; predictable props/emits; SDK-style docs
- **Density** — compact/comfortable/spacious presets for agent tables and forms
- **Trust** — explicit error/loading states, retry-friendly copy, WCAG-minded defaults

## How this relates to Vuetify in production

NovaUI **extends** Vuetify rather than replacing it:

- Wraps `v-btn`, `v-text-field`, `v-dialog` with Nova-specific variants
- Theme registered as `novaDark` / `novaLight` in `theme/nova.ts`
- SCSS tokens mirror Vuetify color keys for custom surfaces (glass cards, agent alerts)
- `$attrs` and slots forwarded so Vuetify power users keep escape hatches

In production (e.g. Billlease / NovaDesk), I'd register the same theme once in `nuxt.config`, import `@nova-ui/vue` components in agent and SDK apps, and avoid duplicating button/table styles per feature team.

## Publishing as npm package (`@nova-ui/vue`)

1. Extract `components/nova/`, `composables/`, `assets/styles/nova/`, `theme/` into a Vite library build
2. Ship `nova-ui/nuxt` module that registers Vuetify theme + global components
3. Export typed props from `types/nova.ts` for SDK consumers
4. Document peer deps: `vue`, `vuetify`, `vuetify-nuxt-module`
5. CI: Vitest for composables, visual regression on key variants (future)

## Production next steps

- [ ] Batch remaining components: NvSelect, NvCheckbox, NvBadge, NvAlert, NvToast, NvDataTable, …
- [ ] `useToast()` composable + `NvToast` host in layout
- [ ] 2–3 Vitest tests (e.g. `useNovaTheme`, dialog confirm guard)
- [ ] Deploy to Vercel, add real demo URL and screenshots
- [ ] Optional: extract to `@nova-ui/vue` package structure

## Project structure

```
nova-ui/
├── assets/styles/nova/     # SCSS tokens, density, glass surfaces
├── components/nova/        # NvButton, NvInput, NvDialog
├── components/docs/        # DocsCodeBlock, DocsPropsTable, …
├── composables/            # useNovaTheme
├── content/components.ts   # Component registry + API docs
├── pages/                  # Marketing, /tokens, /components/*
├── theme/nova.ts           # Vuetify theme definitions
└── types/nova.ts           # Shared TypeScript types
```

## License

MIT — portfolio / demonstration use.
