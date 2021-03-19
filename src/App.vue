<template>
  <div id="app">
    <div id="menu">
      <div id="first" class="menu-item">
        <p><strong>[BC] Collections</strong></p>
      </div>
      <div id="brand">
      </div>
      <div id="side">
        <router-link to="/">
          <div class="menu-item browse">
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/books">
          <div class="menu-item browse">
            <p>Books</p>
          </div>
        </router-link>
        <router-link to="/nominate">
          <div class="menu-item browse">
            <p>Nominate</p>
          </div>
        </router-link>
        <router-link to="/tobuylist">
          <div class="menu-item browse">
            <p>BuyList</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 30px;
  background-color: #F6EAD1;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "first brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#first {
  grid-area: first;
  display: flex;
  justify-content: flex-start;
  margin-right: 200px;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
