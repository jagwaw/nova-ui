<script setup lang="ts">
import { componentRegistry } from '~/content/components'

const { isDark, toggleTheme } = useNovaTheme()

const navItems = [
  { title: 'Overview', to: '/' },
  { title: 'Tokens', to: '/tokens' },
  { title: 'Components', to: '/components' },
]
</script>

<template>
  <VApp class="nv-page">
    <VAppBar flat color="transparent" class="nv-trust-border" style="border-bottom: 1px solid">
      <VAppBarTitle class="nv-heading">
        <NuxtLink to="/" class="text-decoration-none text-high-emphasis">
          Nova<span class="text-primary">UI</span>
        </NuxtLink>
      </VAppBarTitle>

      <template #append>
        <div class="d-none d-sm-flex align-center ga-2 mr-2">
          <VBtn
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            variant="text"
            size="small"
          >
            {{ item.title }}
          </VBtn>
        </div>
        <VBtn
          :icon="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
          variant="text"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        />
      </template>
    </VAppBar>

    <VMain>
      <div class="nv-container py-8">
        <div class="d-flex flex-column flex-lg-row ga-8">
          <aside v-if="$route.path.startsWith('/components')" class="flex-shrink-0" style="width: 220px">
            <p class="text-caption text-medium-emphasis mb-2 nv-mono">COMPONENTS</p>
            <VList density="compact" nav bg-color="transparent">
              <VListItem
                v-for="item in componentRegistry"
                :key="item.slug"
                :to="`/components/${item.slug}`"
                :title="item.name"
                rounded="lg"
              />
            </VList>
          </aside>

          <div class="flex-grow-1" style="min-width: 0">
            <slot />
          </div>
        </div>
      </div>
    </VMain>

    <VFooter class="nv-trust-border text-center py-4" style="border-top: 1px solid">
      <span class="text-caption text-medium-emphasis">
        NovaUI — fictional design system for portfolio demo · built on Vuetify 3
      </span>
    </VFooter>
  </VApp>
</template>
