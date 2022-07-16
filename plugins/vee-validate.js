import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  events: 'change|blur',
  classes: true,
  aria: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
