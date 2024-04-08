import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavigationHeader from '@/components/Header.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('NavigationHeader', () => {
  it('renders properly with routes', () => {
    const routes = [{ path: '/', name: 'Home', redirect: '' }]

    const router = createRouter({
      history: createWebHistory(),
      routes
    })

    const wrapper = mount(NavigationHeader, {
      global: {
        plugins: [router]
      }
    })

    routes.forEach((route) => {
      expect(wrapper.text()).toContain(route.name)
    })
  })

  it('renders properly without routes', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: []
    })

    const wrapper = mount(NavigationHeader, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toBe('')
  })
})
