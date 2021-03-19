<template>
<div class="home-content">
      <div class='mission'>
        <p>We only promote books to read and study. For any retailing purchases or interests in books, please look up more
          information at <a href='https://google.com' target='_blank'>Google.com</a>. You should be able to find any desired information for any books
          listed in this website.</p>
      </div>

      <div class='box1'>
        <div class='picture'>
          <img src='images/AB.jpg' style='padding:50px 0 0 140px;' width='400'>
        </div>
        <div class='header'>“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”
                                ―Albert Einstein</div>
      </div>

      <div class='box2'>
        <div class='header2'>“Knowledge is power, knowledge is safety, knowledge is happiness” ―Thomas Jefferson.</div>
        <div class='picture2'>
          <img src='images/TJ.jpg' style='padding:50px 140px 0 0;' width='400'>
        </div>
      </div>

      <div class='box1'>
        <div class='picture'>
          <img src='images/CC.jpg' style='padding:50px 0 0 140px;' width='400'>
        </div>
        <div class='header3'>“A room without books is like a body without a soul.” –Cicero</div>
      </div>
</div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {           /* Dark gray */
  font-family: "Times New Roman", "Arial", sans-serif;
}

.content-container {
  background-color: #F6EAD1;
  flex-wrap: wrap;
}

.box1 {
  display: flex;
  justify-content: space-around;
  padding: 20px 20px;
  flex-wrap: wrap;
}

.header {
  color: #868583;
  padding:100px 100px 0px 0px;
  width: 350px;
  font-size: 28px;
  flex-wrap: wrap;
}

.box2 {
  display: flex;
  justify-content: space-around;
  padding: 20px 20px;
  flex-wrap: wrap;
}

.header2 {
  color: #868583;
  padding:110px 0px 0px 200px;
  width: 500px;
  font-size: 28px;
  flex-wrap: wrap;
}

.header3 {
  color: #868583;
  padding:100px 100px 0px 100px;
  width: 500px;
  font-size: 28px;
  flex-wrap: wrap;
}

.mission {
  color: #868583;
  font-size: 30px;
  text-align: left;
  padding: 30px 50px 20px 50px;;
  font-weight: bold;
}

.footer{
  text-align:center;
  padding: 40px 0 20px 0;
}

a:link {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: purple;
}

a:hover {
  color: aqua;
  text-decoration: underline;
}

/* Mobile Styles */
@media only screen and (max-width: 414px) {

  .header {
    padding:10px;
    width: 350px;
  }

  .picture {
    padding: 0 140px 0 0 ;
  }

  .header2 {
    color: #868583;
    padding:30px 0px 0px 50px;
    margin-bottom: 1px;
    width: 500px;
  }

  .picture2 {
    padding: 0px 0 0 140px;
  }

  .box1{
    border: 2px solid #333;
  }

  .box2 {
    border: 2px solid #333;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 415px) and (max-width: 960px) {
  .header {
    padding: 10px 0 0 0;
    width: 350px;
    margin-left:30px;
  }

  .picture {
    padding: 0 140px 0 0 ;
  }

  .header2 {
    color: #868583;
    padding: 0 0 0 50px;
    margin-top: 70px;
    width: 550px;
  }

  .picture2 {
    padding: 0px 0 0 140px;
  }

  .box1{
    border: 2px solid #333;
    margin-top: 30px;
  }

  .box2 {
    border: 2px solid #333;
  }

}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
}

</style>
  
