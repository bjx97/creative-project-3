<template>
<div>
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

