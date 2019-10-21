import { shallowMount } from '@vue/test-utils'
import Signup from '../../src/views/Signup'

describe('Signup', () => {
  it('It gets error when the email is not sjsu email', () => {
    const wrapper = shallowMount(Signup, {
      stubs: ['router-link', 'router-view']
    })

    wrapper.find('[data-email]').setValue('test@gmail.com')
    wrapper.find('[data-password]').setValue('password')

    wrapper.find('button').trigger('click')

    expect(wrapper.find('.errorMessage').text()).toBe('Email has to be sjsu.edu')
  })
})
