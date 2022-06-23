<template>
  <div class="px-5 py-1 flex justify-between items-center bg-indigo-600">
    <span class="text-white font-semibold">JKP Infotech</span>
    <!-- search -->
    <div class=" w-1/2 relative focus-within:shadow-lg">
      <div class="flex items-center  w-full px-3 py-2  focus-within:border-b-0">
         <span class="ml-auto material-icons h-5 stroke-slate-300 text-white mr-5">
            search
          </span>
        <input
          type="text"
          @click=" search =! search "
          placeholder="Search.."
          class=" w-full outline-none placeholder:text-slate-300 font-semibold"
        >
      </div>
      <div
        class="absolute w-full  border bg-white"
        v-show="search"
      >
        <div class="px-4 py-1 flex justify-between items-center border-b">
          <p class="text-sm font-medium text-slate-600">
            Recent Search
          </p>
          <p class="text-xs text-slate-400 cursor-pointer">
            Clear All
          </p>
        </div>
      </div>
    </div>
    <!-- profile -->
    <div class="flex space-x-4 items-center text-white">
      <span class="ml-auto material-icons stroke-slate-300 text-white">
            notifications_active
      </span>
      <button class="ml-auto material-icons stroke-slate-300 text-white">
        settings
      </button>
      <img src="https://source.unsplash.com/random/500x500/?r" class="h-10 w-10 rounded-full" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data: () => ({
    search: false
  })
}
</script>

<style scoped>

</style>
