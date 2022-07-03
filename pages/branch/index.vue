<template>
  <div class="w-full h-full flex flex-col">
    <TheTitleBar>
      <template slot="heading">
        Branch
      </template>
      <template slot="iconname">
        domain
      </template>
      <template slot="buttons">
        <!--        <button-->
        <!--          class="px-2 pt-2 btn bg-indigo-600 text-white rounded-md text-white text-sm text-semibold leading-relaxed">-->
        <!--          <span class="material-icons md-16">add</span><span class="iconAlign">Create</span>-->
        <!--        </button>-->
      </template>
    </TheTitleBar>
    <TheTable
      :headings="headings"
      :current-page="current_page"
      :total="total"
      :links="links"
      @pagination-handler="paginationHandler"
    >
      <template slot="heading_title">
        Branch
      </template>
      <template slot="heading_buttons">
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
      </template>
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
          <td class="py-3 px-4 text-center">
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
</template>
<script>
import TheTable from '@/components/TheTable'
import headings from '@/json/branch_heading'

export default {
  name: 'BranchListing',
  components: { TheTable },
  data: () => ({
    headings: headings.headings,
    branches: [],
    links: [],
    total: 0,
    current_page: 1
  }),
  async fetch () {
    try {
      const query = {};
      if (this.$route.query.page) {
        query['page'] = this.$route.query.page
      }
      if (this.$route.query.page) {
        query['per_page'] = this.$route.query.per_page
      }
      
      const { data } = await this.$axios.get('branch', { params: query })
      this.branches = data.data.data
      this.links = data.data.links
      this.total = data.data.total
      this.current_page = data.data.current_page
    } catch (e) {
      console.log(e)
    }
  },
  watch: {
    '$route.query' (query) {
      this.$fetch()
    }
  },
  // watchQuery (newQuery) {
  //   console.log(newQuery)
  // },
  mounted () {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    // })
  },
  methods: {
    paginationHandler (link) {
      console.log("click",link)
    }
  }
}
</script>

<style scoped>

</style>
