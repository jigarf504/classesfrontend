<template>
  <div class="w-full h-full flex flex-col">
    <TheTitleBar>
      <template slot="heading">Inquiry</template>
      <template slot="iconname">domain</template>
      <template slot="buttons">
        <TheBreadcrumb :breadcrumbs="breadcrumbs" />
      </template>
    </TheTitleBar>
    <div class="px-4 py-4 bg-slate-100">
      <div class="bg-white rounded-md dark:bg-darker">
        <div class="flex items-center justify-between p-4 border-b dark:border-primary">
          <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
            Create Inquiry
          </h4>
        </div>
        <ValidationObserver v-slot="{ invalid, validate }">
          <form @submit.prevent="validate().then(onSubmit)">
            <theForm :inquiry="inquiry" />
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import theForm from './form.vue'
import common from '@/mixins/common'
export default {
  name: 'inquiryCreate',
  components: {
    theForm,
    ValidationObserver
  },
  mixins: [common],
  data: () => ({
    loading: false,
    breadcrumbs: [
      {
        label: 'Inquiry',
        url: '/inquriy'
      },
      {
        label: '/'
      },
      {
        label: 'Create'
      }
    ],
    inquiry: {

    }
  })
}
</script>

<style scoped>

</style>
