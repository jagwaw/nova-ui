<script setup lang="ts">
import { componentRegistry } from '~/content/components'
</script>

<template>
  <div>
    <h1 class="text-h4 font-weight-bold nv-heading mb-2">Components</h1>
    <p class="nv-section-desc">
      Live previews, API tables, and copyable snippets for each NovaUI primitive.
    </p>

    <VRow>
      <VCol v-for="item in componentRegistry" :key="item.slug" cols="12" md="6">
        <VCard class="nv-glass-card pa-4" :to="`/components/${item.slug}`" link>
          <p class="nv-mono text-primary text-caption">{{ item.tag }}</p>
          <p class="text-h6 mb-2">{{ item.name }}</p>
          <p class="text-body-2 text-medium-emphasis">{{ item.description }}</p>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
