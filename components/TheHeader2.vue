<template>
  <nav class="bg-white bg-slate-800">
    <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="items-center md:flex">
        <div class="flex flex-col md:flex-row md:mx-6">
          <a
            class="my-1 text-sm font-medium rounded-md mx-2 mt-2 px-2 py-1 text-white transition-colors duration-200 transform transition-colors hover:bg-blue-500 hover:text-blue-100 md:mx-4"
            href="#"
          >Home</a>
          <a
            class="my-1 text-sm font-medium rounded-md mx-2 mt-2 px-2 py-1 text-white transition-colors duration-200 transform transition-colors hover:bg-blue-500 hover:text-blue-100 md:mx-4"
            href="#"
          >Shop</a>
          <a
            class="my-1 text-sm font-medium rounded-md mx-2 mt-2 px-2 py-1 text-white transition-colors duration-200 transform transition-colors hover:bg-blue-500 hover:text-blue-100 md:mx-4"
            href="#"
          >Contact</a>
          <a
            class="my-1 text-sm font-medium rounded-md mx-2 mt-2 px-2 py-1 text-white transition-colors duration-200 transform transition-colors hover:bg-blue-500 hover:text-blue-100 md:mx-4"
            href="#"
          >About</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>

</style>
