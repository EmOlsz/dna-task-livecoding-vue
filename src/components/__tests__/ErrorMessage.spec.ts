import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorMessage from '@/components/ErrorMessage.vue'

describe('ErrorMessage', () => {
  it('renders properly with a message', () => {
    const message = 'Something went wrong!'
    const wrapper = mount(ErrorMessage, {
      props: {
        message: message
      }
    })

    expect(wrapper.text()).toContain(`Error: ${message}`)
  })

  it('renders properly with an empty message', () => {
    const wrapper = mount(ErrorMessage, {
      props: {
        message: ''
      }
    })

    expect(wrapper.text()).toContain('Error:')
  })

  it('renders properly without a message prop', () => {
    const wrapper = mount(ErrorMessage)

    expect(wrapper.text()).toContain('Error:')
  })
})
