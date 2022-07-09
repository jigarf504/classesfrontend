<template>
  <div>
    <LoadingBar :loading="loading" />
    <LazyTheModel v-if="!loading" :is-model="isViewModel" :cls="'model-lg'">
      <template slot="modelBody">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="p-4">
            <div class="flex items-center justify-between py-3.5 border-b">
              <div class="flex items-center">
                <h3 class="font-bold text-lg">{{ '#' + data.branch_code }} :: {{ data.name }}</h3>
              </div>
              <div class="flex items-center">
                <button @click="$emit('close-view-model',false)" class="text-indigo-600 font-bold material-icons md-16">
                  close
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between py-3.5">
              <div class="flex items-center grid grid-cols-1 gap-2">
                <div class="px-3 pt-4">
                  <span class="font-bold">Branch name :</span> {{ data.name }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">Branch code :</span> {{ '#' + data.branch_code }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">Email :</span> {{ data.email }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">Mobile :</span> {{ data.mobile }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">Phone :</span> {{ data.phone }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">Address :</span> {{ data.address }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">City :</span> {{ data.city }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">State :</span> {{ data.state }}
                </div>
              </div>
              <div class="flex items-center place-content-end grid grid-cols-1 gap-2">
                <div class="px-3 pt-4 ">
                  <span class="font-bold">Contact person name: </span> {{ data.contact_person_name }}
                </div>
                <div class="px-3 pt-4 ">
                  <span class="font-bold">Contact person mobile: </span> {{ data.contact_person_mobile }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">Contact person email: </span> {{ data.contact_person_email }}
                </div>
                <div class="px-3 pt-4">
                  <span class="font-bold">Status :</span>
                  <span
                    class="py-1 px-3 rounded-full text-xs"
                    :class="[
                      data.status=='Active' ? 'text-green-600' : 'text-gray-600',
                      data.status=='Active' ?'bg-green-200' : 'bg-gray-300'
                    ]"
                  >
                    {{ data.status }}
                  </span>
                </div>
              </div>
            </div>
            <div class="modal-action border-t pt-3">
              <button
                class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start text-white items-center p-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-lg"
                @click="$emit('close-view-model',false)">Close
              </button>
            </div>
          </div>
        </div>
      </template>
    </LazyTheModel>
  </div>
</template>
<script>
export default {
  name: "theView",
  props: {
    isViewModel: {
      type: Boolean,
      required: true
    },
    branchId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    loading: false,
    data: null
  }),
  methods: {
    async fetchBranch() {
       try {
         this.loading = true
         const {data} = await this.$axios.get(`branch/${this.branchId}`)
         this.loading = false
         this.data = data.data
       } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.fetchBranch();
  }
}
</script>

<style scoped>

</style>
