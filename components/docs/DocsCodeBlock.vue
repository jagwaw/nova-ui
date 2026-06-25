<script setup lang="ts">
const props = defineProps<{
  code: string
}>()

const copied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    if (resetTimer) clearTimeout(resetTimer)
    resetTimer = setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    copied.value = false
  }
}

onUnmounted(() => {
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
  <div class="nv-code-block">
    <VBtn
      class="nv-copy-btn"
      size="small"
      variant="tonal"
      color="primary"
      :aria-label="copied ? 'Copied' : 'Copy code'"
      @click="copyCode"
    >
      {{ copied ? 'Copied' : 'Copy' }}
    </VBtn>
    <pre><code>{{ code }}</code></pre>
  </div>
</template>
