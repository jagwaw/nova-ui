<script setup lang="ts">
import { componentRegistry } from '~/content/components'

const installSnippet = `npm install @nova-ui/vue vuetify

// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module', '@nova-ui/vue/nuxt'],
  css: ['@nova-ui/vue/styles'],
})`

const quickStart = `<template>
  <NvButton variant="primary" @click="open = true">
    Escalate ticket
  </NvButton>
  <NvDialog v-model="open" title="Escalate to supervisor?" agent-alert="urgent">
    This action notifies the on-call lead immediately.
  </NvDialog>
</template>`
</script>

<template>
  <div>
    <section class="nv-hero-gradient mb-12">
      <p class="text-caption nv-mono text-primary mb-3">@nova-ui/vue · Vuetify 3 layer</p>
      <h1 class="text-h3 text-md-h2 font-weight-bold mb-4 nv-heading">
        Components for fintech &amp; support SaaS
      </h1>
      <p class="nv-section-desc mb-6">
        NovaUI wraps Vuetify with consistent APIs, agent-console variants, and accessibility defaults —
        the kind of component layer you'd ship inside a client SDK or agent workspace.
      </p>
      <div class="d-flex flex-wrap ga-3">
        <NvButton to="/components/button" variant="primary" size="lg">
          Browse components
        </NvButton>
        <NvButton to="/tokens" variant="ghost" size="lg">
          Design tokens
        </NvButton>
      </div>
    </section>

    <DocsSection title="Install">
      <p class="text-body-2 text-medium-emphasis mb-3">
        Fictional package name for portfolio demo — shows how I'd publish for SDK consumers.
      </p>
      <DocsCodeBlock :code="installSnippet" />
    </DocsSection>

    <DocsSection title="Quick start">
      <DocsCodeBlock :code="quickStart" />
    </DocsSection>

    <DocsSection title="What's included">
      <VRow>
        <VCol v-for="item in componentRegistry" :key="item.slug" cols="12" sm="6" md="4">
          <VCard class="nv-glass-card h-100 pa-4" :to="`/components/${item.slug}`" link>
            <p class="nv-mono text-primary text-caption mb-1">{{ item.tag }}</p>
            <p class="text-subtitle-1 font-weight-medium mb-2">{{ item.name }}</p>
            <p class="text-body-2 text-medium-emphasis">{{ item.description }}</p>
          </VCard>
        </VCol>
        <VCol cols="12" sm="6" md="4">
          <VCard class="nv-glass-card h-100 pa-4" variant="outlined">
            <p class="nv-mono text-medium-emphasis text-caption mb-1">Coming soon</p>
            <p class="text-subtitle-1 font-weight-medium mb-2">9+ more components</p>
            <p class="text-body-2 text-medium-emphasis">
              NvSelect, NvBadge, NvAlert, NvToast, NvDataTable, and more — batched in next sessions.
            </p>
          </VCard>
        </VCol>
      </VRow>
    </DocsSection>

    <DocsSection title="Philosophy">
      <VRow>
        <VCol cols="12" md="4">
          <h3 class="text-h6 mb-2">Clarity</h3>
          <p class="text-body-2 text-medium-emphasis">
            Typed props, predictable emits, and docs that read like an SDK — not a component dump.
          </p>
        </VCol>
        <VCol cols="12" md="4">
          <h3 class="text-h6 mb-2">Density</h3>
          <p class="text-body-2 text-medium-emphasis">
            Compact table and form presets for agent consoles without sacrificing touch targets.
          </p>
        </VCol>
        <VCol cols="12" md="4">
          <h3 class="text-h6 mb-2">Trust</h3>
          <p class="text-body-2 text-medium-emphasis">
            Fintech-grade error states, loading guards, and accessible focus — production habits, demo data.
          </p>
        </VCol>
      </VRow>
    </DocsSection>
  </div>
</template>
