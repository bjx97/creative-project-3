<template>
<div class="addedWrapper">
    <div class="form-wrapper">
        <h2>Nominate a Book</h2>
        <form v-on:submit.prevent="addBook">
            <input v-model="addedBookName" placeholder="Book name"><br/><br/>
            <input v-model="addedPrice" placeholder="Price"><br/><br/>
            <input v-model="addedAuthor" placeholder="Author"><br/><br/>
            <input v-model="addedGenre" placeholder="Genre"><br/><br/>
            <input v-model="addedLanguage" placeholder="Language"><br/><br/>
            <button type="submit">Add Book</button>
        </form>
    </div>
    <div class="list-wrapper">
        <h2>Book List</h2>
        <hr/>
        <br/>
        <div v-for="list in nominatelist" :key="list.id" class="item-wrapper">
            <div>
                <br/>
                <p>Name: {{list.name}}</p>
                <p>Price: ${{list.price}}</p>
                <p>Genre: {{list.genre}}</p>
                <p>Language: {{list.language}}</p>
                <p><i>Author: {{list.author}}</i></p>
                <br/>
                <hr/>
            </div>
            <div class="remove-wrapper">
                <button @click="remove(list)">Remove Book</button>
                <br/>
                <hr/>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
  name: 'NominateList',
  props: {
    nominatelist: Array
  },
  data () {
      return {
        name: '',
        genre: '',
        author: '',
        price: '',
        language: '',
      }
  },
  methods: {
    addBook() {
      this.$root.$data.nominatelist.push({
        name: this.addedBookName,
        genre: this.addedGenre,
        author: this.addedAuthor,
        price: this.addedPrice,
        language: this.addedLanguage
      });
      this.addedBookName = '';
      this.addedGenre = '';
      this.addedAuthor = '';
      this.addedPrice = '';
      this.addedLanguage = '';
    },
    remove(list) {
        let index = this.$root.$data.nominatelist.indexOf(list);
        this.$root.$data.nominatelist.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.addedWrapper {
    display: flex;
    justify-content: space-around;
}

.item-wrapper {
    display: flex;
}

.remove-wrapper {
    padding-top: 50px;
    padding-left: 50px;
}
</style>
