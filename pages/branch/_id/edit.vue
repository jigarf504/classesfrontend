<template>
  <div class="w-full h-full flex flex-col">
    <LoadingBar :loading="loading" />
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
        <ValidationObserver v-slot="{ invalid, validate }">
          <form @submit.prevent="validate().then(onSubmit)">
            <theForm v-if="branch !== null" :branch="branch" />
            <div class="flex items-center justify-between p-6">
              <div class="basis-full flex items-center">
                <button :disabled="invalid" type="submit" :class="[invalid ? btnDisableClass : btnClass]">
                  <template v-if="loading">
                    <Loader-SVG /> Loading...
                  </template>
                  <template v-else>
                    <span class="material-icons md-18 text-white mr-1">save</span>
                    <p class="text-sm font-medium leading-none text-white subpixel-antialiased">Save</p>
                  </template>
                </button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" @click="$router.push('/branch')">
                  Back
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import theForm from '../form.vue'
import common from '@/mixins/common'
export default {
  name: 'EditBranch',
  components: {
    ValidationObserver,
    theForm
  },
  mixins: [common],
  data: () => ({
    breadcrumbs: [
      {
        label: 'Branch',
        url: '/branch'
      },
      {
        label: '/'
      }
    ],
    loading: false,
    id: null,
    branch: null
  }),
  async fetch () {
    try {
      this.loading = true
      const { data } = await this.$axios.get(`branch/${this.id}`)
      this.branch = data.data
      console.log(this.branch)
      this.breadcrumbs.push({
        label: this.branch.name
      })
      this.breadcrumbs.push({
        label: '/'
      })
      this.breadcrumbs.push({
        label: 'Edit'
      })
      this.loading = false
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async onSubmit () {
      try {
        const { data, status } = await this.$axios.put(`branch/${this.branch.id}`, this.branch)
        if (status === 200) {
          this.$toast.success(data.message)
          this.$router.push('/branch')
        } else {
          this.$toast.error(data.message)
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
