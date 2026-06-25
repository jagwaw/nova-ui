<script setup lang="ts">
import type { NvDensity } from '~/types/nova'

defineOptions({ inheritAttrs: false })

const model = defineModel<string>({ default: '' })

const props = withDefaults(
  defineProps<{
    label?: string
    placeholder?: string
    hint?: string
    errorMessage?: string
    disabled?: boolean
    loading?: boolean
    readonly?: boolean
    required?: boolean
    type?: string
    density?: NvDensity
    prependIcon?: string
    appendIcon?: string
  }>(),
  {
    label: undefined,
    placeholder: undefined,
    hint: undefined,
    errorMessage: undefined,
    disabled: false,
    loading: false,
    readonly: false,
    required: false,
    type: 'text',
    density: 'comfortable',
    prependIcon: undefined,
    appendIcon: undefined,
  },
)

const emit = defineEmits<{
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  'click:append': [event: MouseEvent]
  'click:prepend': [event: MouseEvent]
}>()

const hasError = computed(() => Boolean(props.errorMessage))

const vuetifyDensity = computed(() => {
  const map: Record<NvDensity, 'compact' | 'comfortable' | 'default'> = {
    compact: 'compact',
    comfortable: 'comfortable',
    spacious: 'default',
  }
  return map[props.density]
})

const describedById = computed(() => {
  if (hasError.value) return 'nv-input-error'
  if (props.hint) return 'nv-input-hint'
  return undefined
})
</script>

<template>
  <div :class="['nv-input', `nv-density-${density}`]">
    <VTextField
      v-bind="$attrs"
      :id="$attrs.id as string | undefined"
      v-model="model"
      :label="label"
      :placeholder="placeholder"
      :disabled="disabled"
      :loading="loading"
      :readonly="readonly"
      :required="required"
      :type="type"
      :density="vuetifyDensity"
      :error="hasError"
      :error-messages="errorMessage"
      :hint="hint"
      :persistent-hint="Boolean(hint && !hasError)"
      :prepend-inner-icon="prependIcon"
      :append-inner-icon="appendIcon"
      :aria-describedby="describedById"
      class="nv-input__field"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      @click:append-inner="emit('click:append', $event)"
      @click:prepend-inner="emit('click:prepend', $event)"
    />
    <span v-if="hasError" id="nv-input-error" class="nv-input__sr-only">
      {{ errorMessage }}
    </span>
    <span v-else-if="hint" id="nv-input-hint" class="nv-input__sr-only">
      {{ hint }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.nv-input__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.nv-input__field :deep(.v-field) {
  border-radius: 10px;
}
</style>
