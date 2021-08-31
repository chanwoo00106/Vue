<template>
  <div>

    <Modal v-if="modal" :rooms="rooms" :modal="modal" :clickNum="clickNum" />

    <div class="menu">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/about">About</a>
    </div>

    <Discount />

    <img alt="Vue logo" src="./assets/logo.png">

     <Goods :rooms="rooms" /> 
  </div>
</template>

<script>
import data from './data';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue'
import Goods from './components/Goods.vue';
export default {
  components: { Discount, Modal, Goods },
  name: 'App',
  data(){
    return {
      modal: false,
      rooms: data,
      clickNum: 0,
    }
  }
}
</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

div {
  box-sizing: border-box;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}


</style>
