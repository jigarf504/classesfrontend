<template>
<div class="max-w-2xl mx-auto">
    <div v-if="isModel" id="default-modal" data-modal-show="true" aria-hidden="true" class="bg-gray-700 transition duration-150 ease-in-out z-10 overflow-x-hidden overflow-y-auto fixed h-modal md:h-full pt-20 top-0 left-0 right-0 md:inset-0 z-50 ">
        <div class="relative w-full justify-between max-w-2xl mx-auto px-8 h-full h-auto">
            <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                <slot name="modelBody"></slot>

<!--                <div class="flex items-start justify-between p-3 border-b rounded-t dark:border-gray-600">-->
<!--                    <h3 class="text-gray-900 text-xl lg:text-xl font-semibold dark:text-white">-->
<!--                        Terms of Service-->
<!--                    </h3>-->
<!--                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal" @click="$emit('close-model',false)">-->
<!--                      <span class="material-icons md-20">close</span>-->

<!--                    </button>-->
<!--                </div>-->
<!--                <div class="p-6 space-y-6">-->
<!--                  Are you sure?-->
<!--                </div>-->
<!--                <div class="flex space-x-2 items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">-->
<!--                    <button data-modal-toggle="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>-->
<!--                    <button data-modal-toggle="default-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600" @click="$emit('close-model',false)">Decline</button>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</div>
<!--  <div v-show="isModel" class="h-full py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"-->
<!--       id="modal">-->
<!--    <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">-->
<!--      <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">-->
<!--        <button-->
<!--          class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"-->
<!--          @click="$emit('close-model',false)" aria-label="close modal" role="button">-->
<!--          <span class="material-icons md-20" >close</span>-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import TheDeleteConfirmationForm from "./TheDeleteConfirmationForm";
export default {
  name: "TheModel",
  components: {TheDeleteConfirmationForm},
  props: {
    isModel: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
