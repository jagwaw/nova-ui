<script setup lang="ts">
import type { PropDoc, EmitDoc } from '~/types/nova'

defineProps<{
  props?: PropDoc[]
  emits?: EmitDoc[]
}>()
</script>

<template>
  <div>
    <h3 v-if="props?.length" class="text-h6 font-weight-medium mb-2">Props</h3>
    <table v-if="props?.length" class="nv-props-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in props" :key="row.name">
          <td><code>{{ row.name }}</code></td>
          <td><code>{{ row.type }}</code></td>
          <td>{{ row.default ?? '—' }}</td>
          <td>{{ row.description }}</td>
        </tr>
      </tbody>
    </table>

    <h3 v-if="emits?.length" class="text-h6 font-weight-medium mt-6 mb-2">Emits</h3>
    <table v-if="emits?.length" class="nv-props-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Payload</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in emits" :key="row.name">
          <td><code>{{ row.name }}</code></td>
          <td><code>{{ row.payload }}</code></td>
          <td>{{ row.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
