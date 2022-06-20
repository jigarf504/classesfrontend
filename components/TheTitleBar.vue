<template>
  <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
    <div class="flex items-center">
      <h2 class="text-cyan-900 font-bold font-weight-300 text-xl">
        <font-awesome-icon icon="house-chimney" /> Dashboard
      </h2>
    </div>
    <div class="flex items-center space-x-5">
      <button class="px-3 py-2 bg-indigo-600 rounded-lg text-white text-sm text-semibold"><font-awesome-icon icon="plus" /> Add customer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTitleBar"
}
</script>

<style scoped>

</style>
