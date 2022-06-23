<template>
        <div class="w-full h-full flex flex-col">
          <TheTitleBar>
            <template slot="heading">Dashboard</template>
            <template slot="iconname">home</template>
            <template slot="buttons">
<!--              <button class="px-2 pt-2 btn bg-indigo-600 text-white rounded-md text-white text-sm text-semibold leading-relaxed">-->
<!--                <span class="material-icons md-16">add</span><span class="iconAlign">Customer</span>-->
<!--              </button>-->
            </template>
          </TheTitleBar>

          <div class="h-full px-4 py-4 bg-slate-100">

            <div class="container px-4 rounded-sm py-4 bg-white bg-white shadow-md dark:bg-gray-800">
<!--              <header class="border-b-2 pb-2 py-0">-->
<!--                   <h2>Dashboard</h2>-->
<!--              </header>-->
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default-page'
}
</script>
