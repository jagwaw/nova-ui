<script setup lang="ts">
import { novaTokens } from '~/theme/nova'
</script>

<template>
  <div>
    <h1 class="text-h4 font-weight-bold nv-heading mb-2">Design tokens</h1>
    <p class="nv-section-desc">
      SCSS variables and Vuetify theme colors kept in sync — single source for NovaUI surfaces.
    </p>

    <DocsSection title="Colors">
      <div class="d-flex flex-wrap ga-4">
        <div v-for="(value, name) in novaTokens.colors" :key="name" class="text-center">
          <div
            :style="{
              width: '72px',
              height: '72px',
              borderRadius: '12px',
              background: value,
              border: '1px solid rgba(255,255,255,0.1)',
            }"
          />
          <p class="text-caption nv-mono mt-2">{{ name }}</p>
          <p class="text-caption text-medium-emphasis">{{ value }}</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="Spacing">
      <table class="nv-props-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, name) in novaTokens.spacing" :key="name">
            <td><code>spacing.{{ name }}</code></td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </DocsSection>

    <DocsSection title="Typography">
      <table class="nv-props-table">
        <tbody>
          <tr v-for="(value, name) in novaTokens.typography" :key="name">
            <td><code>{{ name }}</code></td>
            <td :style="{ fontFamily: value }">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </DocsSection>

    <DocsSection title="Elevation">
      <div v-for="(value, name) in novaTokens.elevation" :key="name" class="mb-4">
        <p class="nv-mono text-caption mb-2">elevation.{{ name }}</p>
        <div
          class="pa-6 nv-glass-card"
          :style="{ boxShadow: value }"
        >
          Sample {{ name }} shadow
        </div>
      </div>
    </DocsSection>

    <DocsSection title="Vuetify theme mapping">
      <DocsCodeBlock
        :code="`// theme/nova.ts — registered as novaDark / novaLight
primary: ${novaTokens.colors['nova-violet']}
secondary: ${novaTokens.colors['nova-indigo']}
background: ${novaTokens.colors['nova-void']}
surface: ${novaTokens.colors['nova-surface']}`"
      />
    </DocsSection>
  </div>
</template>
