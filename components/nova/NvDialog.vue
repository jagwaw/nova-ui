<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const model = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    persistent?: boolean
    maxWidth?: string | number
    loading?: boolean
    confirmLabel?: string
    cancelLabel?: string
    hideActions?: boolean
    agentAlert?: 'info' | 'urgent' | null
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    persistent: false,
    maxWidth: 480,
    loading: false,
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    hideActions: false,
    agentAlert: null,
  },
)

const emit = defineEmits<{
  confirm: []
  cancel: []
  'update:modelValue': [value: boolean]
}>()

const agentClass = computed(() => {
  if (props.agentAlert === 'info') return 'nv-agent-alert--info'
  if (props.agentAlert === 'urgent') return 'nv-agent-alert--urgent'
  return undefined
})

function close() {
  if (props.persistent) return
  model.value = false
  emit('cancel')
}

function onConfirm() {
  if (props.loading) return
  emit('confirm')
}

function onCancel() {
  model.value = false
  emit('cancel')
}
</script>

<template>
  <VDialog
    v-bind="$attrs"
    v-model="model"
    :persistent="persistent"
    :max-width="maxWidth"
    class="nv-dialog"
    @click:outside="close"
  >
    <VCard :class="['nv-dialog__card', 'nv-glass-card', agentClass]" role="dialog" aria-modal="true">
      <VCardTitle v-if="title || $slots.title" class="nv-dialog__title">
        <slot name="title">{{ title }}</slot>
      </VCardTitle>

      <VCardSubtitle v-if="subtitle || $slots.subtitle" class="nv-dialog__subtitle">
        <slot name="subtitle">{{ subtitle }}</slot>
      </VCardSubtitle>

      <VCardText class="nv-dialog__body">
        <slot />
      </VCardText>

      <VCardActions v-if="!hideActions" class="nv-dialog__actions">
        <slot name="actions">
          <NvButton variant="ghost" :disabled="loading" @click="onCancel">
            {{ cancelLabel }}
          </NvButton>
          <NvButton variant="primary" :loading="loading" @click="onConfirm">
            {{ confirmLabel }}
          </NvButton>
        </slot>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<style scoped lang="scss">
@use '~/assets/styles/nova/tokens' as *;

.nv-dialog__card {
  padding: $nova-spacing-sm 0;
}

.nv-dialog__title {
  font-family: $nova-font-heading;
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 0;
}

.nv-dialog__subtitle {
  opacity: 0.72;
  padding-top: $nova-spacing-xs;
}

.nv-dialog__body {
  padding-top: $nova-spacing-md;
  line-height: 1.6;
}

.nv-dialog__actions {
  padding: $nova-spacing-md $nova-spacing-lg $nova-spacing-sm;
  gap: $nova-spacing-sm;
  justify-content: flex-end;
}
</style>
