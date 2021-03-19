<template>
<div class="book-wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.id">
        <p><strong>Name:</strong> {{book.name}}</p><br/>
        <div class="info-wrapper">
            <div class="image-wrapper">
                <img :src="'/images/'+book.image"/>                
            </div>
            <div class="info">
                <p><strong>Price:</strong> {{book.price}}</p>
                <p><strong>Genre:</strong> {{book.genre}}</p>
                <p><strong>Author:</strong> {{book.author}}</p>
                <p><strong>Language:</strong> {{book.language}}</p><br/>
                <button class="auto" @click="add(book)">Favorite it!</button>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  },
  methods: {
    add(book) {
        this.$root.$data.tobuylist.push(book);
    }
  }
}
</script>

<style scoped>
.book-wrapper {
    display: flex;
}

.books {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.book {
    display: flex;
    flex-direction: column;
    width: 35%;
    padding: 20px;
    margin-bottom: 30px;
    border: 5px double #333;
}

.image-wrapper img {
    height: 280px;
    width: 200px;
    object-fit: cover;
}

.info {
    padding-top: 70px;
    text-align: left;
    margin-left: 20px;
}

.info-wrapper {
    display: flex;
    justify-content: space-around;
}
</style>
