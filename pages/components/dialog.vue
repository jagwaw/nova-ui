<script setup lang="ts">
import { getComponentDoc } from '~/content/components'

const doc = getComponentDoc('dialog')!

const basicOpen = ref(false)
const urgentOpen = ref(false)
const loadingOpen = ref(false)
const isConfirming = ref(false)
const confirmFailed = ref(false)

async function handleConfirm() {
  isConfirming.value = true
  confirmFailed.value = false
  await new Promise((r) => setTimeout(r, 1200))
  isConfirming.value = false
  // Simulate failure edge state
  confirmFailed.value = true
}

const basicCode = `<NvButton @click="open = true">Open dialog</NvButton>
<NvDialog v-model="open" title="Assign ticket?" subtitle="Ticket #TK-4821">
  Route this ticket to the billing queue?
</NvDialog>`

const urgentCode = `<NvDialog
  v-model="open"
  title="Escalate to supervisor?"
  agent-alert="urgent"
  confirm-label="Escalate"
  @confirm="onEscalate"
>
  The on-call lead will be notified immediately.
</NvDialog>`
</script>

<template>
  <div>
    <p class="nv-mono text-primary text-caption mb-1">{{ doc.tag }}</p>
    <h1 class="text-h4 font-weight-bold nv-heading mb-2">{{ doc.name }}</h1>
    <p class="nv-section-desc">{{ doc.description }}</p>

    <DocsSection title="Default">
      <div class="nv-preview-surface nv-preview-row mb-2">
        <NvButton variant="primary" @click="basicOpen = true">Open dialog</NvButton>
      </div>
      <NvDialog
        v-model="basicOpen"
        title="Assign ticket?"
        subtitle="Ticket #TK-4821"
        confirm-label="Assign"
        @confirm="basicOpen = false"
      >
        Route this ticket to the billing queue? The customer will see queue position #3.
      </NvDialog>
      <DocsCodeBlock :code="basicCode" />
    </DocsSection>

    <DocsSection title="Agent alert — urgent">
      <div class="nv-preview-surface nv-preview-row mb-2">
        <NvButton variant="agent-urgent" @click="urgentOpen = true">Escalate ticket</NvButton>
      </div>
      <NvDialog
        v-model="urgentOpen"
        title="Escalate to supervisor?"
        agent-alert="urgent"
        confirm-label="Escalate"
        @confirm="urgentOpen = false"
      >
        The on-call lead will be notified immediately. This cannot be undone from the agent console.
      </NvDialog>
      <DocsCodeBlock :code="urgentCode" />
    </DocsSection>

    <DocsSection title="Loading & error edge">
      <div class="nv-preview-surface nv-preview-row mb-2">
        <NvButton variant="secondary" @click="loadingOpen = true; confirmFailed = false">
          Confirm with async
        </NvButton>
      </div>
      <NvDialog
        v-model="loadingOpen"
        title="Refund ₱500?"
        agent-alert="info"
        :loading="isConfirming"
        persistent
        @confirm="handleConfirm"
        @cancel="confirmFailed = false"
      >
        <p class="mb-0">Synthetic demo — no real payment API.</p>
        <VAlert
          v-if="confirmFailed"
          type="error"
          variant="tonal"
          class="mt-4"
          density="compact"
        >
          Refund service unavailable. Retry in a moment or copy error ref NV-503.
        </VAlert>
      </NvDialog>
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
