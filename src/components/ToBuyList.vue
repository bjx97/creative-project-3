<template>
    <div class="buylist-wrapper">
        <h2>Favorite List</h2>
        <div class="wrapper">
            <div class="what-if" v-if="this.$root.$data.tobuylist.length === 0">
                <p style="font-size: 40px"><strong>Favorite some book :)</strong></p>
            </div>
            <div v-else class="book-wrapper">
                <div class="books">
                    <div class="book" v-for="book in tobuylist" :key="book.id">
                        <div class="picture">
                            <p><strong>Name:</strong> {{book.name}}</p><br/>
                        </div>
                        <div class="info">
                            <img :src="'/images/'+book.image"/>
                            <button class="auto" @click="remove(book)">Dislike it!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <a href="https://github.com/bjx97/creative-project-3" target="_blank">GitHub Repository</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ToBuyList',
  props: {
    tobuylist: Array
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
      remove(book) {
        let index = this.$root.$data.tobuylist.indexOf(book);
        this.$root.$data.tobuylist.splice(index, 1);
      }
  }
}
</script>

<style scoped>
.wrapper {
    margin-top: 40px;
}
.book-wrapper {
    display: flex;
    justify-content: center;
}

.books {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.book {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    border: 5px dotted #333;
}

.picture {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: left;
}

.info img {
    height: 280px;
    width: 200px;
    padding-left:30px;
    padding-bottom:15px;
    object-fit: cover;
}

.info {
    display: flex;
}

.auto {
  margin: auto;
  margin-right: 100px;
  margin-left: 100px;
}

.what-if {
    margin-top: 150px;
}


</style>