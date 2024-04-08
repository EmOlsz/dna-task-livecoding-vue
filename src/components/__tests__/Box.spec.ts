import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Box from '@/components/Box.vue'

describe('Box', () => {
  it('renders properly when currencySign is provided', () => {
    const wrapper = mount(Box, {
      props: {
        currencySign: '$',
        label: 'Label',
        value: 123
      }
    })

    expect(wrapper.text()).toContain('123$ Label')
  })

  it('renders properly when currencySign is not provided', () => {
    const wrapper = mount(Box, {
      props: {
        label: 'Label',
        value: 123
      }
    })

    expect(wrapper.text()).toContain('123 Label')
  })

  it('renders properly when value is negative', () => {
    const wrapper = mount(Box, {
      props: {
        currencySign: '$',
        label: 'Label',
        value: -123
      }
    })

    expect(wrapper.text()).toContain('-123$ Label')
  })

  it('renders properly when value is zero', () => {
    const wrapper = mount(Box, {
      props: {
        currencySign: '$',
        label: 'Label',
        value: 0
      }
    })

    expect(wrapper.text()).toContain('0$ Label')
  })

  it('renders properly when label is empty', () => {
    const wrapper = mount(Box, {
      props: {
        currencySign: '$',
        label: '',
        value: 123
      }
    })

    expect(wrapper.text()).toContain('123$')
  })

  it('renders properly when value is a float', () => {
    const wrapper = mount(Box, {
      props: {
        currencySign: '$',
        label: 'Label',
        value: 123.45
      }
    })

    expect(wrapper.text()).toContain('123.45$ Label')
  })
})
