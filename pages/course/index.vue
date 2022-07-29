<template>
  <div class="w-full h-full flex flex-col">
    <LoadingBar :loading="loading" />
    <TheTitleBar>
      <template slot="heading">
        Course
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
        Course
      </template>
      <template slot="heading_buttons">
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
        <NuxtLink
          to="course/create"
          class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start items-center p-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-lg"
        >
          <span class="material-icons md-18 text-white mr-1">add</span>
          <p class="text-sm font-medium leading-none text-white subpixel-antialiased">Create course</p>
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
        <tr v-else-if="!courses.length" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 whitespace-nowrap text-center">
            No records found
          </td>
        </tr>
        <tr v-for="(course,key) in courses" v-else :key="key" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              <input v-model="selectedcourseId" type="checkbox" :value="course.id">
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ course.course_code }}
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ course.name }}
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ course.full_payment }}
            </div>
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            <div class="flex font-normal">
              {{ course.installment_payment }}
            </div>
          </td>
          <td class="py-3 px-6 text-center whitespace-nowrap">
            <div class="flex font-normal text-center">
              <span
                class="py-1 px-3 rounded-full text-xs"
                :class="[
                  course.status=='Active' ? 'text-green-600' : 'text-gray-600',
                  course.status=='Active' ?'bg-green-200' : 'bg-gray-300'
                ]"
              >
                {{ course.status }}
              </span>
            </div>
          </td>
          <td class="py-3 px-4 text-center">
            <div class="flex item-center justify-center">
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="isViewModel = true; course_id=course.id">
                  visibility
                </button>
              </div>
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="$router.push(`/branch/${course.id}/edit`)">
                  edit_square
                </button>
              </div>
              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button class="material-icons md-18" @click="isOpenModel = true;course_id=course.id">delete</button>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </TheTable>
    <LazyTheModel v-if="isOpenModel" :is-model="isOpenModel" :cls="'model-2md'">
      <template slot="modelBody">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <TheDeleteConfirmationForm :branch-id="course_id" @close-model="deleteHandler" />
        </div>
      </template>
    </LazyTheModel>
    <TheView v-if="isViewModel" :is-view-model="isViewModel" :branch-id="course_id" @close-view-model="isViewModel = false;course_id = null" />
  </div>
</template>
<script>
import headings from '@/json/course_heading'
export default {
  name: 'CourseListing',
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
    course_id: null,
    isExpand: false,
    isOpenModel: false,
    isViewModel: false,
    headings: headings.headings,
    courses: [],
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
        label: 'Course'
      }
    ],
    loading: true
  }),
  async fetch () {
    try {
      const query = {}
      if (this.$route.query.page) {
        query.page = this.$route.query.page
      }
      if (this.$route.query.per_page) {
        query.per_page = this.$route.query.per_page
      }
      const { data } = await this.$axios.get('course', { params: query })
      this.courses = data.data.data
      this.links = data.data.links
      this.total = data.data?.total || 0
      this.current_page = data.data?.current_page || 1
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
      if (isConfirm && this.course_id) {
        this.loading = true
        await this.$axios.delete(`branch/${this.course_id}`)
        this.$fetch()
        this.loading = false
        this.isOpenModel = false
        this.course_id = null
      }
      if (isConfirm === false) {
        this.isOpenModel = false
        this.course_id = null
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
