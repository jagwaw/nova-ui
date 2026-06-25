<script setup lang="ts">
defineProps<{
  dos: string[]
  donts: string[]
}>()
</script>

<template>
  <div class="nv-do-dont-grid">
    <div class="nv-do-card">
      <p class="text-subtitle-2 font-weight-bold mb-2 text-success">Do</p>
      <ul class="pl-4 mb-0">
        <li v-for="(item, i) in dos" :key="`do-${i}`">{{ item }}</li>
      </ul>
    </div>
    <div class="nv-dont-card">
      <p class="text-subtitle-2 font-weight-bold mb-2 text-error">Don't</p>
      <ul class="pl-4 mb-0">
        <li v-for="(item, i) in donts" :key="`dont-${i}`">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
