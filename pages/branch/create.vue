<template>
  <div class="w-full h-full flex flex-col">
    <TheTitleBar>
      <template slot="heading">Branch</template>
      <template slot="iconname">domain</template>
      <template slot="buttons">
        <!--        <button-->
        <!--          class="px-2 pt-2 btn bg-indigo-600 text-white rounded-md text-white text-sm text-semibold leading-relaxed">-->
        <!--          <span class="material-icons md-16">add</span><span class="iconAlign">Create</span>-->
        <!--        </button>-->
      </template>
    </TheTitleBar>
    <div class="h-full px-4 py-4 bg-slate-100">
      <div class="bg-white rounded-md dark:bg-darker">
        <!-- Card header -->
        <div class="flex items-center justify-between p-4 border-b dark:border-primary">
          <h4 class="text-lg font-semibold text-gray-500 dark:text-light">Create Branch</h4>
        </div>
        <!-- Chart -->
        <div class="relative p-4">
            Hello world
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create'
}
</script>

<style scoped>

</style>
