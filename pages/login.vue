<template>
  <div class="bg-blue-600 h-screen w-screen flex justify-center shadow items-center">
    <div class="bg-white px-8 py-10 rounded border w-96">
      <div class="flex flex-col items-center justify-center mb-4">
        <h2 class="text-2xl font-bold">
          Login
        </h2>
      </div>
      <form action="#" method="POST">
        <div class="flex flex-col my-2">
          <label class="text-xs text-gray-400">Username</label>
          <div class="text-xs text-red-400 flex justify-between items-center">
            <span>
              <b>Error: </b>
              wrong username !
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <input
            class="border rounded px-3 py-1 mt-2"
            type="text"
            value="John"
          >
        </div>
        <div class="flex flex-col my-2">
          <label class="text-xs text-gray-400">Password</label>
          <input class="border rounded px-3 py-1 mt-2" type="password" value="password">
        </div>
        <div class="flex flex-col items-center justify-center my-3">
          <button class="my-3 py-1 w-full rounded bg-blue-600 text-white">
            Submit
          </button>
          <p class="text-xs text-gray-500">
            Forgot password ?
            <a href="#" class="font-bold text-gray-700">Click here</a>
            to reset your password.
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'blank'
}
</script>

<style scoped>

</style>
