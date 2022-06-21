<template>
        <div class="w-full h-full flex flex-col">
           <TheTitleBar />

          <div class="h-full px-4 py-4 bg-slate-100">

            <div class="container px-4 rounded-sm py-4 bg-white bg-white shadow-md dark:bg-gray-800">
              <header class="border-b-2 pb-2 py-0">
                   <h2>Dashboard</h2>
              </header>
              <span class="material-icons md-36">face</span>
            </div>
          </div>
        </div>
<!--  <div>-->
<!--     <div slot="title"> Some header template content. </div>-->
<!--     Hello world-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default-page'
}
</script>
