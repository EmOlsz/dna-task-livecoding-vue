import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RouterView } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

describe('RouterViewWrapper', () => {
  it('renders HomeView component when route is home', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        }
      ]
    })

    const wrapper = mount(RouterView, {
      global: {
        plugins: [router]
      }
    })

    await router.isReady()

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })

  it('renders nothing when there are no routes', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: []
    })

    const wrapper = mount(RouterView, {
      global: {
        plugins: [router]
      }
    })

    await router.isReady()

    expect(wrapper.text()).toBe('')
  })
})
