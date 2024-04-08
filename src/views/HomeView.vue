<script setup lang="ts">
import { computed } from 'vue'

import Box from '@/components/Box.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { useFetch } from '@/composables'

import { type Transaction, type Merchant } from '@/types'
import { ApiUrls, Labels } from '@/enums'

const [transactionsData, transactionsError, transactionsLoading] = useFetch<Transaction[]>(
  ApiUrls.Transactions
)
const [merchantsData, merchantsError, merchantsLoading] = useFetch<Merchant[]>(ApiUrls.Merchants)

const transactionsSum = computed<number>(() => {
  if (!transactionsData.value) {
    return 0
  }
  return (
    +transactionsData.value
      .reduce((sum: number, current: Transaction) => sum + current.amount, 0)
      .toFixed(2) || 0
  )
})
</script>

<template>
  <div v-if="transactionsLoading || merchantsLoading">{{ Labels.Loading }}</div>
  <div v-else class="flex py-16 px-8">
    <Box :value="transactionsSum.valueOf()" currency-sign="$" :label="Labels.Profit" />
    <Box v-if="transactionsData" :value="transactionsData.length" :label="Labels.Transactions" />
    <Box v-if="merchantsData" :value="merchantsData.length" :label="Labels.Merchants" />
    <ErrorMessage v-if="transactionsError" :message="transactionsError.message" />
    <ErrorMessage v-if="merchantsError" :message="merchantsError.message" />
  </div>
</template>
