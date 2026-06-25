<script setup lang="ts">
import { getComponentDoc } from '~/content/components'

const doc = getComponentDoc('button')!

const basicCode = `<NvButton variant="primary">Save changes</NvButton>
<NvButton variant="secondary">Assign agent</NvButton>
<NvButton variant="ghost">Cancel</NvButton>`

const agentCode = `<NvButton variant="agent-info">View SLA details</NvButton>
<NvButton variant="agent-urgent">Escalate now</NvButton>`

const statesCode = `<NvButton loading>Processing…</NvButton>
<NvButton disabled>Unavailable</NvButton>`
</script>

<template>
  <div>
    <p class="nv-mono text-primary text-caption mb-1">{{ doc.tag }}</p>
    <h1 class="text-h4 font-weight-bold nv-heading mb-2">{{ doc.name }}</h1>
    <p class="nv-section-desc">{{ doc.description }}</p>

    <DocsSection title="Variants">
      <div class="nv-preview-surface nv-preview-row mb-2">
        <NvButton variant="primary">Save changes</NvButton>
        <NvButton variant="secondary">Assign agent</NvButton>
        <NvButton variant="ghost">Cancel</NvButton>
        <NvButton variant="danger">Delete draft</NvButton>
      </div>
      <DocsCodeBlock :code="basicCode" />
    </DocsSection>

    <DocsSection title="Agent alert variants">
      <div class="nv-preview-surface nv-preview-row mb-2">
        <NvButton variant="agent-info">View SLA details</NvButton>
        <NvButton variant="agent-urgent">Escalate now</NvButton>
      </div>
      <DocsCodeBlock :code="agentCode" />
    </DocsSection>

    <DocsSection title="Sizes">
      <div class="nv-preview-surface nv-preview-row align-end mb-2">
        <NvButton size="sm">Small</NvButton>
        <NvButton size="md">Medium</NvButton>
        <NvButton size="lg">Large</NvButton>
      </div>
    </DocsSection>

    <DocsSection title="Disabled & loading">
      <div class="nv-preview-surface nv-preview-row mb-2">
        <NvButton loading>Processing…</NvButton>
        <NvButton disabled>Unavailable</NvButton>
      </div>
      <DocsCodeBlock :code="statesCode" />
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
