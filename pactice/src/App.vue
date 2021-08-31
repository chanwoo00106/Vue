<template>
  <div>

    <transition name="fade">
      <Modal @closeModal="modal = !modal" v-if="modal" :room="rooms[clickNum]" :modal="modal" />
    </transition>

    <div class="menu">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/about">About</a>
    </div>

    <!-- <Discount :name="obj.name" :age="obj.name" /> -->
    <!-- 위 아래 코드는 같음 -->
    <!-- <Discount v-bind="obj" /> -->

    <Discount v-if="showDiscount" />


    <button @click="priceSort">가격순 정렬</button>
    <button @click="priceResort">가격역순 정렬</button>
    <button @click="charSort">가나다순 정렬</button>

     <Goods @openModal="modal = !modal; clickNum = $event" :room="rooms[i]" @increase="rooms[i].report++" v-for="(showing, i) in rooms" :key="showing" /> 
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
      showDiscount: true,
      modal: false,
      rooms: data,
      clickNum: 0,
      obj: { name: 'chan', age: 17 }
    } 
  },
  mounted() {
    // 마운트 된 후
    setTimeout(() => this.showDiscount = false, 2000);
  },
  beforeMount() {
    // 마운트 되기 전
  },
  methods: {
    priceSort() {
      this.rooms.sort((a,b) => a.price - b.price);
    },
    priceResort(){
      this.rooms.sort((a,b) => b.price - a.price);
    },
    charSort() {
      
    }
  },
}
</script>

<style>
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}


.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0);
}

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
