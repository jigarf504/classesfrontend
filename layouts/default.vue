<template>
  <!-- component -->
  <div class="h-screen w-full">
    <div class=" h-full bg-white overflow-hidden flex flex-col overflow-hidden shadow-xl">
      <!-- navbar -->
      <TheHeader />
      <!-- body -->
      <div class="h-full flex">
        <!-- slidebar 1 -->
        <TheSidebar />
        <div class="w-full h-full flex flex-col">
          <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
            <div class="flex items-center">
              Dashboard
            </div>
            <div class="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 stroke-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
          </div>
          <div class="h-full px-10 py-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data: () => ({})
}
</script>
