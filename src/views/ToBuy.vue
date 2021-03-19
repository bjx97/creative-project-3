<template>
    <div>
        <ToBuyList :tobuylist="displaytobuylist"/>
    </div>
</template>

<script>
import ToBuyList from "../components/ToBuyList.vue"
export default {
  name: 'ToBuy',
  components: {
    ToBuyList
  },
  data() {
    return {
    }
  },
  computed: {
    displaytobuylist() {
      return this.$root.$data.tobuylist;
    }
  }
}

</script>