<script setup lang="ts">
import { getComponentDoc } from '~/content/components'

const doc = getComponentDoc('input')!

const email = ref('')
const ticketId = ref('')
const hasSubmitted = ref(false)

const ticketError = computed(() => {
  if (!hasSubmitted.value) return ''
  if (!ticketId.value) return 'Ticket ID is required'
  if (!/^TK-\d{4,}$/.test(ticketId.value)) return 'Use format TK-1234'
  return ''
})

function validateTicket() {
  hasSubmitted.value = true
}

const defaultCode = `<NvInput v-model="email" label="Agent email" placeholder="you@novadesk.io" />`

const errorCode = `<NvInput
  v-model="ticketId"
  label="Ticket ID"
  hint="Format: TK-1234"
  :error-message="ticketError"
/>`

const densityCode = `<NvInput density="compact" label="Compact search" prepend-icon="mdi-magnify" />
<NvInput density="spacious" label="Spacious amount" />`
</script>

<template>
  <div>
    <p class="nv-mono text-primary text-caption mb-1">{{ doc.tag }}</p>
    <h1 class="text-h4 font-weight-bold nv-heading mb-2">{{ doc.name }}</h1>
    <p class="nv-section-desc">{{ doc.description }}</p>

    <DocsSection title="Default">
      <div class="nv-preview-surface mb-2" style="max-width: 400px">
        <NvInput v-model="email" label="Agent email" placeholder="you@novadesk.io" />
      </div>
      <DocsCodeBlock :code="defaultCode" />
    </DocsSection>

    <DocsSection title="Error state">
      <div class="nv-preview-surface mb-2" style="max-width: 400px">
        <NvInput
          v-model="ticketId"
          label="Ticket ID"
          hint="Format: TK-1234"
          :error-message="ticketError"
          @blur="validateTicket"
        />
        <NvButton class="mt-3" size="sm" variant="secondary" @click="validateTicket">
          Validate
        </NvButton>
      </div>
      <DocsCodeBlock :code="errorCode" />
    </DocsSection>

    <DocsSection title="Density & icons">
      <div class="nv-preview-surface d-flex flex-column ga-4 mb-2" style="max-width: 400px">
        <NvInput density="compact" label="Compact search" prepend-icon="mdi-magnify" />
        <NvInput density="comfortable" label="Comfortable (default)" />
        <NvInput density="spacious" label="Spacious amount" prepend-icon="mdi-currency-usd" />
        <NvInput label="Loading" loading />
        <NvInput label="Disabled" disabled model-value="Read only queue" />
      </div>
      <DocsCodeBlock :code="densityCode" />
    </DocsSection>

    <DocsSection title="Do / Don't">
      <DocsDoDont :dos="doc.dos" :donts="doc.donts" />
    </DocsSection>

    <DocsSection title="Accessibility">
      <ul class="nv-a11y-list">
        <li v-for="(note, i) in doc.a11y" :key="i">{{ note }}</li>
      </ul>
    </DocsSection>

    <DocsSection title="API">
      <DocsPropsTable :props="doc.props" :emits="doc.emits" />
    </DocsSection>
  </div>
</template>
