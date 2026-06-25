<script setup lang="ts">
import type { NvButtonVariant, NvSize } from '~/types/nova'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    variant?: NvButtonVariant
    size?: NvSize
    loading?: boolean
    disabled?: boolean
    block?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
    type: 'button',
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const vuetifyColor = computed(() => {
  const map: Record<NvButtonVariant, string | undefined> = {
    primary: 'primary',
    secondary: 'secondary',
    ghost: undefined,
    danger: 'error',
    'agent-info': 'info',
    'agent-urgent': 'error',
  }
  return map[props.variant]
})

const vuetifyVariant = computed(() => {
  if (props.variant === 'ghost') return 'text'
  if (props.variant === 'agent-info' || props.variant === 'agent-urgent') return 'tonal'
  return 'flat'
})

const sizeClass = computed(() => `nv-btn--${props.size}`)
const agentClass = computed(() => {
  if (props.variant === 'agent-info') return 'nv-agent-alert--info'
  if (props.variant === 'agent-urgent') return 'nv-agent-alert--urgent'
  return undefined
})

function onClick(event: MouseEvent) {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>

<template>
  <VBtn
    v-bind="$attrs"
    :type="type"
    :color="vuetifyColor"
    :variant="vuetifyVariant"
    :loading="loading"
    :disabled="disabled"
    :block="block"
    :class="['nv-btn', sizeClass, agentClass]"
    @click="onClick"
  >
    <slot />
  </VBtn>
</template>

<style scoped lang="scss">
@use '~/assets/styles/nova/tokens' as *;

.nv-btn--sm {
  min-height: 32px;
  font-size: 0.8125rem;
  padding-inline: 12px;
}

.nv-btn--md {
  min-height: 40px;
  font-size: 0.875rem;
}

.nv-btn--lg {
  min-height: 48px;
  font-size: 0.9375rem;
  padding-inline: 20px;
}

.nv-btn.nv-agent-alert--info,
.nv-btn.nv-agent-alert--urgent {
  font-weight: 600;
  letter-spacing: 0.01em;
}
</style>
