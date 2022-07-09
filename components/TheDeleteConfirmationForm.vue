<template>
  <div class="p-4">
    <div class="text-center p-5 flex-auto justify-center">
      <span class="material-icons md-48 font-bold w-12 h-12 flex items-center text-red-500 mx-auto">delete_outline</span>
      <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
      <p class="text-sm text-gray-500 px-8">Do you really want to delete your account?
        This process cannot be undone</p>
    </div>
    <div class="p-3  mt-2 text-center space-x-4 md:block">
      <button
        class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
        @click="$emit('close-model',false)">
        Cancel
      </button>
      <button
        class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
        @click="$emit('close-model',true)">Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheDeleteConfirmationForm"
}
</script>

<style scoped>

</style>
