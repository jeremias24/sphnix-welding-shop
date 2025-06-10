<!-- src/components/dashboard-default-widgets/WidgetStats.vue -->
<template>
  <div class="card shadow-sm h-100">
    <div class="card-body d-flex align-items-center gap-4">
      <i :class="['fs-2x text-primary', icon]"></i>
      <div>
        <h3 class="mb-0 fw-semibold">{{ value }}</h3>
        <span class="text-muted">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  value: number | string
  icon?: string
}>()
</script>
