<template>
  <div>
    <div class="inline-grid grid gap-4 grid-cols-3 grid-rows-3">
      <span class="p-4 bg-lime-500 rounded-lg text-white">01</span>
      <span class="p-4 bg-lime-500 rounded-lg text-white">02</span>
      <span class="p-4 bg-lime-500 rounded-lg text-white">03</span>
      <span class="p-4 bg-lime-500 rounded-lg text-white">04</span>
      <span class="p-4 bg-lime-500 rounded-lg text-white">05</span>
      <span class="p-4 bg-lime-500 rounded-lg text-white">06</span>
    </div>
    <div class="flex">
      <div class="flex-1 p-4 m-4 bg-slate-500">
        01
      </div>
      <div class="contents">
        <div class="flex-1 p-4 m-4 bg-slate-200">
          02
        </div>
        <div class="flex-1 p-4 m-4 bg-slate-200">
          03
        </div>
      </div>
      <div class="flex-1 p-4 m-4 bg-slate-500">
        04
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
