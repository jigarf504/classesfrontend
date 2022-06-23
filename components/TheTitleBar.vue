<template>
  <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
    <div class="flex items-center">
      <h2 class="text-cyan-900 font-semibold font-weight-300 text-2xl ">
        <span class="material-icons md-36">
          <slot name="iconname"></slot>
        </span>
        <span class="iconAlign">
          <slot name="heading"></slot>
        </span>
      </h2>
    </div>
    <div class="flex items-center space-x-5">
      <slot name="buttons"></slot>

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
