<template>
  <!-- component -->
  <div class="h-screen w-full">
    <div class=" h-full bg-white flex flex-col shadow-xl">
      <TheHeader />
      <div class="h-full flex">
        <TheSidebar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheTitleBar from "../components/TheTitleBar";

export default {
  name: 'Default',
  components: {TheTitleBar},
  data: () => ({}),
  created() {
    console.log(this.$slots)
  }
}
</script>
