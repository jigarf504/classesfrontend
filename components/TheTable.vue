<template>
  <div class="overflow-x-auto">
    <div class="flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
      <div class="w-full">
        <div class="bg-white shadow-md rounded ">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th v-for="(th,key) of headings" :key="key" class="py-3 px-6 text-left" :class="[th.align === 'center' ? 'text-center' : 'text-left']">
                  {{ th.label }}
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <slot name="table_data" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheTable',
  props: {
    headings: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
