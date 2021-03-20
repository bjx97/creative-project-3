<template>
<div>
    <div class='header1'><h2>You may also nominate any books you feel worthy of being in the top rated books list.</h2>
    </div>
    <NominateList :nominatelist="displaylist"/>
</div>
</template>

<script>
import NominateList from "../components/NominateList.vue"
export default {
  name: 'Nominate',
  components: {
    NominateList
  },
  data() {
    return {
    }
  },
  computed: {
    displaylist() {
      return this.$root.$data.nominatelist;
    }
  }
}
</script>

<style scoped>
.header1 {
  display: flex;
  justify-content: center;
  color: #868583;
  margin-bottom: 60px;
}
</style>
