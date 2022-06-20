<template>
  <div class="px-5 py-1 flex justify-between items-center bg-indigo-600">
    <span class="text-white font-semibold">CWP Classes</span>
    <!-- search -->
    <div class=" w-1/2 relative focus-within:shadow-lg">
      <div class="flex items-center  w-full focus-within:border px-3 py-2  focus-within:border-b-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 stroke-slate-300 text-white mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          @click=" search =! search "
          placeholder="Search.."
          class=" w-full outline-none placeholder:text-slate-300 font-semibold"
        >
      </div>
      <!-- alpine js  -->
                <div
                  class="absolute w-full  border   bg-white    "

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white stroke-slate-400 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <img src="https://source.unsplash.com/random/500x500/?face" class="h-10 w-10 rounded-full" alt="">
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
