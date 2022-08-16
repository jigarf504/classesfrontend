<template>
  <div class="w-full h-full flex flex-col">
    <LoadingBar :loading="loading" />
    <TheTitleBar>
      <template slot="heading">
        Inquiries
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
        Inquiry
      </template>
      <template slot="heading_buttons">
        <div v-if="selectedInquiryId.length > 0" class="dropdown relative">
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
        <NuxtLink
          to="inquiry/create"
          class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start items-center p-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-lg"
        >
          <span class="material-icons md-18 text-white mr-1">add</span>
          <p class="text-sm font-medium leading-none text-white subpixel-antialiased">Create Inquiry</p>
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
        <tr v-else-if="inquiries.length <= 0" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 whitespace-nowrap text-center">
            No data available
          </td>
        </tr>
        <tr v-for="(inquiry,key) in inquiries" v-else :key="key" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              <input v-model="selectedInquiryId" type="checkbox" :value="inquiry.id">
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ inquiry.branch.name }}
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ inquiry.first_name + " " + inquiry.last_name }}
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ inquiry.email }}
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ inquiry.mobile }}
            </div>
          </td>
          <td class="py-3 px-6 text-center whitespace-nowrap">
            <div class="flex font-normal text-center">
              <span
                class="py-1 px-3 rounded-full text-xs"
                :class="[
                  inquiry.is_register == 1 ? 'text-green-600' : 'text-gray-600',
                  inquiry.is_register == 1 ?'bg-green-200' : 'bg-gray-300'
                ]"
              >
                {{ inquiry.is_register ? 'Yes' : 'No' }}
              </span>
            </div>
          </td>
          <td class="py-3 px-4 text-center">
            <div class="flex item-center justify-center">
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="isViewModel = true; inquiry_id=inquiry.id">
                  visibility
                </button>
              </div>
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="$router.push(`/branch/${inquiry.id}/edit`)">
                  edit_square
                </button>
              </div>
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="isOpenModel = true;branch_id=inquiry.id"> </button>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </TheTable>
  </div>
</template>
<script>
import headings from '@/json/inquries_heading'
export default {
  name: 'Inquiries',
  data: () => ({
    inquiry_id: null,
    isExpand: false,
    isOpenModel: false,
    isViewModel: false,
    headings: headings.headings,
    inquiries: [],
    links: [],
    total: 0,
    current_page: 1,
    selectedInquiryId: [],
    actions: {
      active: 'Active',
      inactive: 'Inactive',
      delete: 'Delete'
    },
    breadcrumbs: [
      {
        label: 'Inquiry'
      }
    ],
    loading: true
  }),
  async fetch () {
    try {
      const query = this.$route.query || {}
      const { data } = await this.$axios.get('inquiry', { params: query })
      this.inquiries = data.data.data
      this.links = data.data.links
      this.total = data.data.total
      this.current_page = data.data.current_page
      this.loading = false
    } catch (e) {
      this.$toast.error(e.response.data.message)
      this.loading = false
    }
  },
  watch: {
    '$route.query' () {
      this.$fetch()
    }
  },
  methods: {
    checkAllHandler (isSelected) {
      if (isSelected) {
        this.inquiries.forEach((branch) => {
          this.selectedInquiryId.push(branch.id)
        })
      } else {
        this.selectedInquiryId = []
      }
    },
    async bulkActionHandler (actionName) {
      const dataStr = {
        action: actionName,
        ids: this.selectedBranchId
      }
      this.loading = true
      const { data, status } = await this.$axios.post('inquiry/bulk-actions', dataStr)
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
