<template>
<div class="max-w-2xl mx-auto">
    <div v-if="isModel" id="default-modal" data-modal-show="true" aria-hidden="true" class="bg-gray-600 bg-opacity-80 transition duration-150 ease-in-out z-10 overflow-x-hidden overflow-y-auto fixed h-modal md:h-full pt-20 top-0 left-0 right-0 md:inset-0 z-50 ">
        <div class="relative w-full justify-between mx-auto px-8 h-full h-auto opacity-100" :class="cls">
            <slot name="modelBody"></slot>
        </div>
    </div>
</div>
</template>
<script>
import TheDeleteConfirmationForm from "./TheDeleteConfirmationForm";
export default {
  name: "TheModel",
  components: {TheDeleteConfirmationForm},
  props: {
    isModel: {
      type: Boolean,
      required: true
    },
    cls: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>

</style>
