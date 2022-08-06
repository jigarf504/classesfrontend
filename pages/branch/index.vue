<template>
  <div class="w-full h-full flex flex-col">
    <LoadingBar :loading="loading" />
    <TheTitleBar>
      <template slot="heading">
        Branch
      </template>
      <template slot="iconname">
        domain
      </template>
      <template slot="buttons">
        <TheBreadcrumb :breadcrumbs="breadcrumbs" />
      </template>
    </TheTitleBar>

    <TheTable
      :headings="headings"
      :current-page="current_page"
      :total="total"
      :links="links"
      @checkall-handler="checkAllHandler"
    >
      <template slot="heading_title">
        Branch
      </template>
      <template slot="heading_buttons">
<!--        <button type="button" class="flex items-center rounded-lg bg-indigo-700 px-4 py-2 text-white"-->
<!--                @click="isOpenModel = true">-->
<!--          <span class="material-icons md-20">refresh</span>-->
<!--          <span class="font-medium subpixel-antialiased">Processing...</span>-->
<!--        </button>-->
        <div v-if="selectedBranchId.length > 0" class="dropdown relative">
          <button
            class="flex items-center rounded-lg bg-indigo-700 px-4 py-2 text-white"
            type="button"
            @click="isExpand = !isExpand"
          >
            <span class="font-medium subpixel-antialiased">Actions</span>
            <span class="material-icons md-16">expand_more</span>
          </button>
          <ul
            v-show="isExpand"
            class="min-w-max w-44 absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1  m-0 bg-clip-padding border-none"
          >
            <li v-for="(action,key) of actions" :id="key" :key="key">
              <button
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                @click="bulkActionHandler(key)"
              >{{ action }}
              </button>
            </li>
          </ul>
        </div>
        <!--        <button-->
        <!--          class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"-->
        <!--          @click="$fetch"-->
        <!--        >-->
        <!--          <p class="text-sm font-medium leading-none text-white">-->
        <!--            <span class="material-icons md-12">refresh</span>-->
        <!--          </p>-->
        <!--        </button>-->
        <NuxtLink
          to="branch/create"
          class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start items-center p-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-lg"
        >
          <span class="material-icons md-18 text-white mr-1">add</span>
          <p class="text-sm font-medium leading-none text-white subpixel-antialiased">Create Branch</p>
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
              <input v-model="selectedBranchId" type="checkbox" :value="branch.id">
            </div>
          </td>
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
                  branch.status=='Active' ? 'text-green-600' : 'text-gray-600',
                  branch.status=='Active' ?'bg-green-200' : 'bg-gray-300'
                ]"
              >
                {{ branch.status }}
              </span>
            </div>
          </td>
          <td class="py-3 px-4 text-center">
            <div class="flex item-center justify-center">
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="isViewModel = true; branch_id=branch.id">
                  visibility
                </button>
              </div>
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="$router.push(`/branch/${branch.id}/edit`)">
                  edit_square
                </button>
              </div>
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="isOpenModel = true;branch_id=branch.id">delete</button>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </TheTable>
    <LazyTheModel v-if="isOpenModel" :is-model="isOpenModel" :cls="'model-2md'">
      <template slot="modelBody">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <TheDeleteConfirmationForm :branch-id="branch_id" @close-model="deleteHandler" />
        </div>
      </template>
    </LazyTheModel>
    <TheView v-if="isViewModel" :is-view-model="isViewModel" :branch-id="branch_id" @close-view-model="isViewModel = false;branch_id = null" />
  </div>
</template>
<script>
import headings from '@/json/branch_heading'
export default {
  name: 'BranchListing',
  components: {
    TheView: () => import('./view'),
    TheBreadcrumb: () => import('@/components/TheBreadcrumb'),
    LoadingBar: () => import('@/components/LoadingBar'),
    TheTable: () => import('@/components/TheTable')
  },
  transition () {
    return 'slide-right'
  },
  data: () => ({
    branch_id: null,
    isExpand: false,
    isOpenModel: false,
    isViewModel: false,
    headings: headings.headings,
    branches: [],
    links: [],
    total: 0,
    current_page: 1,
    selectedBranchId: [],
    actions: {
      active: 'Active',
      inactive: 'Inactive',
      delete: 'Delete'
    },
    breadcrumbs: [
      {
        label: 'Branch'
      }
    ],
    loading: true
  }),
  async fetch () {
    try {
      const query = this.$route.query || {}
      const { data } = await this.$axios.get('branch', { params: query })
      this.branches = data.data.data
      this.links = data.data.links
      this.total = data.data.total
      this.current_page = data.data.current_page
      this.loading = false
    } catch (e) {
      console.log(e)
    }
  },
  watch: {
    '$route.query' (query) {
      this.$fetch()
    }
  },
  mounted () {
  },
  methods: {
    async deleteHandler (isConfirm) {
      if (isConfirm && this.branch_id) {
        this.loading = true
        await this.$axios.delete(`branch/${this.branch_id}`)
        this.$fetch()
        this.loading = false
        this.isOpenModel = false
        this.branch_id = null
      }
      if (isConfirm === false) {
        this.isOpenModel = false
        this.branch_id = null
      }
    },
    // paginationHandler(link) {
    //   console.log("click", link)
    // },
    checkAllHandler (isSelected) {
      if (isSelected) {
        this.branches.forEach((branch) => {
          this.selectedBranchId.push(branch.id)
        })
      } else {
        this.selectedBranchId = []
      }
    },
    async bulkActionHandler (actionName) {
      const dataStr = {
        action: actionName,
        ids: this.selectedBranchId
      }
      this.loading = true
      const { data, status } = await this.$axios.post('branch/bulk-actions', dataStr)
      this.loading = false
      this.isExpand = false
      if (status === 200) {
        this.$toast.success(data.message)
        this.selectedBranchId = []
        this.$fetch()
      } else {
        this.$toast.error(data.message)
      }
    }
  }
}
</script>

<style scoped>

</style>
