<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  value: number
  currencySign?: string
  label: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="box flex flex-grow h-[100px] border border-[var(--color-border)] rounded [&:not(:first-of-type)]:ml-[2%]"
  >
    <div v-if="currencySign" class="flex flex-grow items-center justify-evenly">
      <span class="text-2xl text-[var(--color-text-green)]">{{ value }}{{ currencySign }}</span>
      {{ label }}
    </div>
    <div v-else class="flex flex-grow items-center justify-evenly">
      <span class="text-2xl text-[var(--color-text-green)]">{{ value }}</span> {{ label }}
    </div>
  </div>
</template>
