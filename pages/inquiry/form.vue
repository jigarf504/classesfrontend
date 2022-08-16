<template>
  <div class="relative p-4 flex flex-row">
    <div class="basis-3/6">
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="first name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Branch*</label>
          <div class="relative">
             <select id="id_label_single" v-model="inquiry.first_name" :class="[errors.length ? textClsError : textCls]">
              <!-- <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option> -->
            </select>
            <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="first name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name*</label>
          <div class="relative">
            <input id="first_name" v-model="inquiry.first_name" type="text" :class="[errors.length ? textClsError : textCls]" placeholder="Enter first name">
            <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="last name" rules="required" v-slot="{ errors }" mode="eager">
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name*</label>
          <div class="relative">
            <input id="last_name" v-model="inquiry.last_name" type="text" :class="[errors.length ? textClsError : textCls]" placeholder="Enter last name">
            <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="email address" rules="required|email" v-slot="{ errors }" mode="eager">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address*</label>
          <input id="email" v-model="inquiry.email" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch email address...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="w-3/4 pr-8 pl-3 mb-4">
        <ValidationProvider name="mobile number" rules="required|length:10" v-slot="{ errors }" mode="eager">
          <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile number*</label>
          <input id="mobile" v-model="inquiry.mobile" :class="[errors.length ? textClsError : textCls]" placeholder="Enter the branch mobile number...">
          <span v-if="errors.length" id="error" class="text-rose-500">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <!-- <Select2 v-model="myValue" :options="myOptions" /> -->
    </div>
  </div>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
import common from '@/mixins/common'
export default {
  name: 'InquiryForm',
  components: {
    ValidationProvider
  },
  mixins: [common],
  props: {
    inquiry: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    myValue: "",
    myOptions: [{ id: 1, text: 11111 }, { id: 2, text: 22222 }]
  }),
  head () {
    return {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css",
          rel: "stylesheet"
        }
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-2.2.4.min.js",
          integrity: "sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",
          crossorigin: "anonymous"
        },
        {
          src: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"
        }
      ]
    }
  },
  mounted () {
    $("#id_label_single").select2({
      ajax: {
        url: process.env.BASE_URL + "/branch/list",
        processResults: (data) => {
          return {
            results: data.data
          };
        }
      }
    })
  }
}
</script>
