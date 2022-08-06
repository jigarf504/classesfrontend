<template>
  <div>
    <span v-if="sort.field === label && sort.type === 'ASC'" class="material-icons md-16">arrow_drop_up</span>
    <span v-else-if="sort.field === label && sort.type === 'DESC'"  class="material-icons md-16">arrow_drop_down</span>
    <span v-else class="material-icons md-16">unfold_more</span>
  </div>
</template>

<script>
export default {
  name: "Sort",
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({
    sort: {
      field : null,
      type: ''
    }
  }),
  watch: {
    '$route.query'(query) {
      this.sort = {
        field: query.sort_field,
        type: query.sort_type
      }
    }
  },
  created() {
    const query = this.$route.query || {}
    this.sort = {
      field: query.sort_field,
      type: query.sort_type
    }
  }
}
</script>

<style scoped>

</style>
