<template>
  <div class="relative p-4 flex flex-row">
    <div class="basis-3/6">
      <div class="w-1/2 pr-8 pl-3 mb-4">
        <ValidationProvider name="branch code" rules="required" v-slot="{ errors }" mode="eager">
          <label for="branch-code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Branch code*</label>
          <div class="relative">
            <input id="branch-code" v-model="branch.branch_code" type="text" :class="[errors.length ? textClsError : textCls]" placeholder="Enter branch code">
            <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="branch name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="branch-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Branch name*</label>
          <input id="branch-name" v-model="branch.name" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch name...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="email address" rules="required|email" v-slot="{ errors }" mode="eager">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address*</label>
          <input id="email" v-model="branch.email" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch email address...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="mobile number" rules="required|length:10" v-slot="{ errors }" mode="eager">
          <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile number*</label>
          <input id="mobile" v-model="branch.mobile" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch mobile number...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
        <input id="phone_number" v-model="branch.phone" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch phone number...">
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="address" rules="required" v-slot="{ errors }" mode="eager">
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address*</label>
          <textarea id="address" v-model="branch.address" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch address..." />
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="city" rules="required" v-slot="{ errors }" mode="eager">
          <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
          <input id="city" v-model="branch.city" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch city...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="city" rules="required" v-slot="{ errors }" mode="eager">
          <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
          <input id="state" v-model="branch.state" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch state...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="checked-toggle" class="block mb-2 mr-4 justify-start text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
        <label for="checked-toggle" class="relative inline-flex items-center mt-2 mb-2 cursor-pointer">
          <input id="checked-toggle" v-model="branch.is_active" type="checkbox" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        </label>
      </div>
    </div>
    <div class="basis-3/6">
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <ValidationProvider name="contact person name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="contact_person_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person name*</label>
          <input id="contact_person_name" v-model="branch.contact_person_name" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the contact person name...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <ValidationProvider name="contact person email" rules="required" v-slot="{ errors }" mode="eager">
          <label for="contact_person_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person email*</label>
          <input id="contact_person_email" v-model="branch.contact_person_email" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the contact person email address...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <ValidationProvider name="contact person mobile" rules="required" v-slot="{ errors }" mode="eager">
          <label for="contact_person_mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person mobile*</label>
          <input id="contact_person_mobile" v-model="branch.contact_person_mobile" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the contact person mobile number...">
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
    branch: {
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
