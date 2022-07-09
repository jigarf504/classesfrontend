<template>
  <div class="px-4 py-4 bg-slate-100">
    <div class="bg-white rounded-md dark:bg-darker">
      <div class="flex items-center justify-between p-4 border-b dark:border-primary">
        <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
          <slot name="heading_title" />
        </h4>
        <div class="flex items-center space-x-2">
          <slot name="heading_buttons" />
        </div>
      </div>
      <div class="relative p-4">
        <div class="overflow-x-hidden">
          <div class="flex items-center justify-center bg-gray-100 font-sans">
            <div class="w-full">
              <div class="bg-white shadow-md rounded">
                <div class="flex items-center justify-between pb-3">
                  <div class="flex items-center">
                    <select v-model="selectPagePage" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20  p-3" @change="perPageHandler()">
                      <option v-for="page of pages" :key="page" :value="page">
                        {{ page }}
                      </option>
                    </select>
                    <span class="ml-2" v-html="no_of_page" />
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="relative w-60">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <span class="material-icons md-16">search</span>
                      </div>
                      <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search...">
                    </div>
                  </div>
                </div>
                <table class="w-full table-auto">
                  <thead>
                    <tr class="bg-indigo-700 text-white uppercase text-sm leading-normal">
                      <th v-for="(th,key) of headings" :key="key" class="py-3 px-6 text-left" :class="[th.align === 'center' ? 'text-center' : 'text-left']">
                        <template v-if="th.isCheckebox">
                          <input type="checkbox" v-model="checkAll" @click="$emit('checkall-handler',!checkAll)">
                        </template>
                        <template v-else>
                          {{ th.label }}
                        </template>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600 text-sm font-light">
                    <slot name="table_data" />
                  </tbody>
                </table>
                <div class="flex items-center justify-between py-3">
                  <div class="flex items-center" v-html="no_of_page" />
                  <div v-if="isLinks" class="flex items-center space-x-2">
                    <div
                      v-for="(link,key) of links"
                      :key="key"
                      class="flex select-none space-x-1 text-white"
                    >,
                      <button
                        class="rounded-md bg-indigo-600 px-4 py-2 transition duration-300 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        :class="[
                          link.active === 'true' ? 'bg-indigo-50' : '',
                          link.url === null ? 'bg-indigo-100' : '']"
                        :disabled="link.url === null ? true : false"
                        @click="paginationHandler(link)"
                        v-html="link.label"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheTable',
  props: {
    headings: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    pages: [5, 10, 15, 20, 25, 50, 100],
    selectPagePage: 10,
    checkAll: false
  }),
  computed: {
    perPage() {
      return this.$route.query?.per_page || 10;
    },
    no_of_page () {
      return '<b>' + (this.perPage * this.currentPage) + '</b>&nbsp;of&nbsp;<b>' + this.total + '</b>&nbsp;total records'
    },
    isLinks () {
      return this.links?.length > 0
    }
  },
  methods: {
    paginationHandler (link) {
      if (link.url === null) {
        return false
      }
      let label = link.label
      if (label.indexOf('Previous') !== -1) {
        label = this.currentPage - 1
      }
      if (label.indexOf('Next') !== -1) {
        label = this.currentPage + 1
      }
      let query = { ...this.$route.query }
      query['page'] = label
      this.$router.push({ query: query })
    },
    perPageHandler () {
      let query = { ...this.$route.query }
      query['per_page'] = this.selectPagePage
      this.$router.push({ query: query })
    }
  },
  mounted() {
    this.selectPagePage = this.perPage
  }
}
</script>

<style scoped>

</style>
