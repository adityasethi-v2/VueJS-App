import { shallowMount } from 'vue/test-utils'
import Login from './Login.vue'
import { expect } from "chai";

describe("Login", () => {
  let component;

  beforeEach(() => {
    component = shallowMount(Login);
  });

  it("should render screen", () => {
    component.setData({
        username: 'aditya',
        password: 'aditya123'
    })

    console.log(component);
  });
});

test ('Login', () => {
    const wrapper = shallowMount(Login);
    wrapper.setData({
        username: 'aditya',
        password: 'aditya123'
    })

    expect(wrapper.find('.invalid').exists()).toBe(false)
})