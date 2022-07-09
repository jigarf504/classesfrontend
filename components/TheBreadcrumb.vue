<template>
  <nav class="rounded-md w-full">
    <ol class="list-reset flex">
      <li>
        <nuxt-link to="/" class="text-blue-600 hover:text-blue-700">Dashboard</nuxt-link>
      </li>
      <li><span class="text-gray-500 mx-2">/</span></li>
      <li v-for="(breadcrumb,key) of breadcrumbs" :key="key">
          <span v-if="breadcrumb.label === '/'" class="text-gray-500 mx-2">/</span>
          <span v-else-if="breadcrumb.url === undefined" class="text-gray-500 mx-2">
            {{breadcrumb.label}}
          </span>
          <nuxt-link v-else :to="breadcrumb.url" class="text-blue-600 hover:text-blue-700">
              {{breadcrumb.label}}
          </nuxt-link>
      </li>
<!--      <li><span class="text-gray-500 mx-2">/</span></li>-->
<!--      <li><a href="#" class="text-blue-600 hover:text-blue-700">Library</a></li>-->
<!--      <li><span class="text-gray-500 mx-2">/</span></li>-->
<!--      <li class="text-gray-500">Data</li>-->
    </ol>
  </nav>
</template>

<script>
export default {
  name: "TheBreadcrumb",
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
