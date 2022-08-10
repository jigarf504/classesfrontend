<template>
  <div class="relative p-4 flex flex-row">
    <div class="basis-3/6">
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="first name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name*</label>
          <div class="relative">
            <input id="first_name" v-model="inquiry.first_name" type="text" :class="[errors.length ? textClsError : textCls]" placeholder="Enter first name">
            <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="last name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name*</label>
          <div class="relative">
            <input id="last_name" v-model="inquiry.last_name" type="text" :class="[errors.length ? textClsError : textCls]" placeholder="Enter last name">
            <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="email address" rules="required|email" v-slot="{ errors }" mode="eager">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address*</label>
          <input id="email" v-model="inquiry.email" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch email address...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="mobile number" rules="required|length:10" v-slot="{ errors }" mode="eager">
          <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile number*</label>
          <input id="mobile" v-model="inquiry.mobile" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch mobile number...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'BranchForm',
  components: {
    ValidationProvider
  },
  props: {
    inquiry: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    textCls: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5',
    textClsError: 'bg-rose-100 border border-rose-600 text-rose-900 text-sm rounded-lg w-full p-2.5'
  })
}
</script>
