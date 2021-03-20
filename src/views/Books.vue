<template>
<div>
  <div class='header1'><h1>Top nominations of the month</h1>
  </div>
  <BookList :books="displaybooks"/>
</div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
  name: 'Home',
  components: {
    BookList
  },
  data() {
    return {
    }
  },
  computed: {
    displaybooks() {
      return this.$root.$data.books;
    }
  }
}
</script>

<style scoped>

.header1 {
  display: flex;
  justify-content: center;
  color: #868583;
  margin-bottom: 40px;
}

</style>
