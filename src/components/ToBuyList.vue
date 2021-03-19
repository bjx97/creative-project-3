<template>
    <div class="buylist-wrapper">
        <h2>To Buy List</h2>
        <div class="wrapper">
            <div class="what-if" v-if="this.$root.$data.tobuylist.length === 0">
                <p style="font-size: 40px"><strong>Choose some books to buy :)</strong></p>
            </div>
            <div v-else class="book-wrapper">
                <div class="books">
                    <div class="book" v-for="book in tobuylist" :key="book.id">
                        <div class="picture">
                            <p><strong>Name:</strong> {{book.name}}</p><br/>
                            <p><strong>Price:</strong> {{book.price}}</p>
                        </div>
                        <div class="info">
                            <img :src="'/images/'+book.image"/>
                            <button class="auto" @click="remove(book)">DELETE FROM LIST</button>
                        </div>
                    </div>
                </div>
            </div>
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
    padding: 20px;
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
    padding-top: 10px;
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