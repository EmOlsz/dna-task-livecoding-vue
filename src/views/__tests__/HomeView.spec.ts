import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders loading state when data is loading', async () => {
    const useFetch = vi.fn()
    useFetch.mockReturnValue([null, null, true])

    const wrapper = mount(HomeView)
    await nextTick()

    expect(wrapper.text()).toContain('Loading...')
  })

  it('renders properly when data is loaded', async () => {
    const transactionsData = [
      {
        id: '667b64d8-5b2a-4216-bff3-661e7c9a24af',
        userId: '875b26e3-2463-4415-b819-511dcd181d9e',
        merchantId: 'd027fb50-2de9-4728-9f69-dfb952fe44bb',
        amount: 19.28,
        date: '2024-01-03T00:32:34.206Z'
      }
    ]

    const useFetch = vi.fn()
    useFetch.mockReturnValue([transactionsData, null, false])

    const wrapper = mount(HomeView)

    await flushPromises()

    expect(wrapper.text()).not.toContain('Loading...')
    expect(wrapper.findAll('.box').length).toBe(3)
    expect(wrapper.findAll('.error').length).toBe(0)
  })
})
