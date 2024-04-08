<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="leading-relaxed max-h-screen">
    <nav v-for="route in router.options.routes" :key="route.path" class="w-full text-center">
      <RouterLink
        :to="route.path"
        class="inline-block text-[1rem] px-4 hover:bg-[var(--color-text-grey)] border-l-[color:var(--color-border)] border-l border-solid first-of-type:border-0"
      >
        {{ route.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav a.router-link-exact-active {
  color: var(--color-text);

  &:hover {
    background-color: transparent;
  }
}
</style>
