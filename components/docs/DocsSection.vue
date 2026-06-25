<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="mb-10">
    <h2 class="nv-section-title">{{ title }}</h2>
    <slot />
  </section>
</template>
