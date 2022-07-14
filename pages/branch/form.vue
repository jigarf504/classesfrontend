<template>
  <div class="relative p-4 flex flex-row">
    <div class="basis-3/6">
      <div class="w-1/3 pr-8 pl-3 mb-4">
        <label for="branch-code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Branch code</label>
        <div class="relative">
          <input id="branch-code" v-model="branch.branch_code" type="text" :class="textCls" placeholder="Enter branch code">
        </div>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="branch-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Branch name</label>
        <input id="branch-name" v-model="branch.name" :class="textCls" placeholder="Enter the branch name...">
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input id="email" v-model="branch.email" :class="textCls" placeholder="Enter the branch email address...">
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile number</label>
        <input id="mobile" v-model="branch.mobile" :class="textCls" placeholder="Enter the branch mobile number...">
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
        <input id="phone_number" v-model="branch.phone" :class="textCls" placeholder="Enter the branch phone number...">
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
        <textarea id="address" v-model="branch.address" :class="textCls" placeholder="Enter the branch address..." />
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
        <input id="city" v-model="branch.city" :class="textCls" placeholder="Enter the branch city...">
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
        <input id="state" v-model="branch.state" :class="textCls" placeholder="Enter the branch state...">
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
        <label for="contact_person_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person name</label>
        <input id="contact_person_name" v-model="branch.contact_person_name" :class="textCls" placeholder="Enter the contact person name...">
      </div>
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <label for="contact_person_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person email</label>
        <input id="contact_person_email" v-model="branch.contact_person_name" :class="textCls" placeholder="Enter the contact person email address...">
      </div>
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <label for="contact_person_mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person mobile</label>
        <input id="contact_person_mobile" v-model="branch.contact_person_mobile" :class="textCls" placeholder="Enter the contact person mobile number...">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BranchForm',
  props: {
    branch: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    textCls: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
  })
}
</script>
