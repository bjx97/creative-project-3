<template>
<div class="book-wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.id">
        <div class="picture">
          <p><strong>Name:</strong> {{book.name}}</p><br/>
          <img :src="'/images/'+book.image"/>
        </div>
        <div class="info">
            <p><strong>Price:</strong> {{book.price}}</p>
            <p><strong>Genre:</strong> {{book.genre}}</p>
            <p><strong>Author:</strong> {{book.author}}</p>
            <p><strong>Language:</strong> {{book.language}}</p>
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
  }
}
</script>

    border: 5px double #333;

<style scoped>
.book-wrapper {
    display: flex;
    justify-content: center;
}

.books {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: auto;
}

.book {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
}

.picture {
    display: flex;
    flex-direction: column;

}

.picture img {
    height: 280px;
    width: 200px;
    object-fit: cover;
}

.info {
    padding-top: 70px;
    text-align: left;
}
</style>
