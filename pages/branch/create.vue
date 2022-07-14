<template>
  <div class="w-full h-full flex flex-col">
    <TheTitleBar>
      <template slot="heading">Branch</template>
      <template slot="iconname">domain</template>
      <template slot="buttons">
        <TheBreadcrumb :breadcrumbs="breadcrumbs" />
      </template>
    </TheTitleBar>
    <div class="px-4 py-4 bg-slate-100">
      <div class="bg-white rounded-md dark:bg-darker">
        <div class="flex items-center justify-between p-4 border-b dark:border-primary">
          <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
            Create Branch
          </h4>
        </div>
        <theForm :branch="branch" />
        <div class="flex items-center justify-between p-6">
          <div class="basis-full flex items-center">
            <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
              <Loader-SVG /> Loading...
            </button>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import theForm from './form.vue'
export default {
  name: 'Create',
  components: {
    theForm
  },
  data: () => ({
    breadcrumbs: [
      {
        label: 'Branch',
        url: '/branch'
      },
      {
        label: '/'
      },
      {
        label: 'Create'
      }
    ],
    branch: {
      address: '',
      branch_code: '',
      city: '',
      contact_person_email: '',
      contact_person_mobile: '',
      contact_person_name: '',
      email: '',
      is_active: '',
      mobile: '',
      name: '',
      phone: '',
      state: ''
    }
  })
}
</script>

<style scoped>

</style>
