<template>
  <div class="relative p-4 flex flex-row">
    <div class="basis-4/6">
      <div class="w-1/2 pr-8 pl-3 mb-4">
        <ValidationProvider v-slot="{ errors }" name="branch code" rules="required|max:5" mode="eager">
          <label for="course-code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course code*</label>
          <div class="relative">
            <input id="course-code" v-model="course.course_code" type="text" :class="[errors.length ? textClsError : textCls]" placeholder="Enter course code">
            <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider v-slot="{ errors }" name="course name" rules="required" mode="eager">
          <label for="branch-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course name*</label>
          <input id="branch-name" v-model="course.name" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch name...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider v-slot="{ errors }" name="full payment" rules="required" mode="eager">
          <label for="full_payment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full payment number*</label>
          <input id="full_payment" v-model="course.full_payment" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the full payment...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider v-slot="{ errors }" name="installment payment" rules="required" mode="eager">
          <label for="installment_payment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Installment payment*</label>
          <input id="installment_payment" v-model="course.installment_payment" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the installment payment...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="template" rules="required" v-slot="{ errors }" mode="eager">
          <label for="course_template" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course template*</label>
          <textarea id="course_template" v-model="course.course_template" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the course template..." />
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <label for="checked-toggle" class="block mb-2 mr-4 justify-start text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
        <label for="checked-toggle" class="relative inline-flex items-center mt-2 mb-2 cursor-pointer">
          <input id="checked-toggle" v-model="course.is_active" type="checkbox" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        </label>
      </div>
    </div>
    <!-- <div class="basis-3/6">
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <ValidationProvider name="contact person name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="contact_person_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person name*</label>
          <input id="contact_person_name" v-model="branch.contact_person_name" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the contact person name...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <ValidationProvider name="contact person email" rules="required" v-slot="{ errors }" mode="eager">
          <label for="contact_person_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person email*</label>
          <input id="contact_person_email" v-model="branch.contact_person_email" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the contact person email address...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-3 pl-8 mb-4">
        <ValidationProvider name="contact person mobile" rules="required" v-slot="{ errors }" mode="eager">
          <label for="contact_person_mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact person mobile*</label>
          <input id="contact_person_mobile" v-model="branch.contact_person_mobile" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the contact person mobile number...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div> -->
  </div>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'CourseForm',
  components: {
    ValidationProvider
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    textCls: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5',
    textClsError: 'bg-rose-100 border border-rose-600 text-rose-900 text-sm rounded-lg w-full p-2.5'
  })
}
</script>
