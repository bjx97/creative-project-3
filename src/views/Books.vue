<template>
<div>
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
