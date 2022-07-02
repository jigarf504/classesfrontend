/* eslint-disable vue/html-self-closing */
/* eslint-disable vue/order-in-components */
<template>
  <div class="w-full h-full flex flex-col">
    <TheTitleBar>
      <template slot="heading">Branch</template>
      <template slot="iconname">domain</template>
      <template slot="buttons">
        <!--        <button-->
        <!--          class="px-2 pt-2 btn bg-indigo-600 text-white rounded-md text-white text-sm text-semibold leading-relaxed">-->
        <!--          <span class="material-icons md-16">add</span><span class="iconAlign">Create</span>-->
        <!--        </button>-->
      </template>
    </TheTitleBar>

    <div class="h-full px-4 py-4 bg-slate-100">
      <div class="bg-white rounded-md dark:bg-darker">
        <!-- Card header -->
        <div class="flex items-center justify-between p-4 border-b dark:border-primary">
          <h4 class="text-lg font-semibold text-gray-500 dark:text-light">Branches</h4>
          <div class="flex items-center space-x-2">
            <button
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              @click="$fetch"
            >
              <p class="text-sm font-medium leading-none text-white">
                <span class="material-icons md-12">refresh</span>
              </p>
            </button>
            <NuxtLink 
              to="branch/create"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p class="text-sm font-medium leading-none text-white">Create Branch</p>
            </NuxtLink>
          </div>
        </div>
        <!-- Chart -->
        <div class="relative p-4">
          <TheTable :headings="headings">
            <template slot="table_data">
              <tr v-if="$fetchState.pending" class="border-b border-gray-200 hover:bg-gray-100">
                <td colspan="6" class="py-3 px-6 whitespace-nowrap text-center">
                  Loading data....
                </td>
              </tr>
              <tr v-else-if="$fetchState.error" class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 whitespace-nowrap text-center">
                  Oops.. Something went wrong.
                </td>
              </tr>
              <tr v-for="(branch,key) in branches" v-else :key="key" class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex font-normal">
                    {{ branch.branch_code }}
                  </div>
                </td>
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex font-normal">
                    {{ branch.name }}
                  </div>
                </td>
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex font-normal">
                    {{ branch.email }}
                  </div>
                </td>
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex font-normal">
                    {{ branch.mobile }}
                  </div>
                </td>
                <td class="py-3 px-6 text-center whitespace-nowrap">
                  <div class="flex font-normal text-center">
                    <span
                      class="py-1 px-3 rounded-full text-xs"
                      :class="[
                        branch.status=='Active' ? 'text-green-600' : 'bg-purple-200',
                        branch.status=='Active' ?'bg-green-200' : 'bg-purple-600'
                      ]"
                    >
                      {{ branch.status }}
                    </span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <span class="material-icons md-16">visibility</span>
                    </div>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <span class="material-icons md-16">edit_square</span>
                    </div>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <span class="material-icons md-16">delete</span>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </TheTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheTable from '@/components/TheTable'
import headings from '@/json/branch_heading'

export default {
  name: 'BranchListing',
  components: { TheTable },
  data: () => ({
    headings: headings.headings,
    branches: []
  }),
  async fetch () {
    try {
      const { data } = await this.$axios.get('branch')
      this.branches = data.data.data
    } catch (e) {
      console.log(e)
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    // })
  },
  methods: {}
}
</script>

<style scoped>

</style>
