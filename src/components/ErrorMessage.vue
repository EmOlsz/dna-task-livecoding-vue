<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  message: string
}

defineProps<Props>()
</script>

<template>
  <div class="error text-[var(--color-text-red)] font-bold">Error: {{ message }}</div>
</template>
