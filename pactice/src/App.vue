<template>
  <div>

    <div v-if="modal" class="black-bg">
      <div class="white-bg">
        <img class="modal-img" :src="rooms[clickNum].url" alt="img">
        <h4>{{ rooms[clickNum].title }}</h4>
        <p>{{rooms[clickNum].content}}</p>
        <p>가격 : {{rooms[clickNum].price}}</p>
        <button @click="modal = !modal">모달 닫기</button>
      </div>
    </div>

    <div class="menu">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/about">About</a>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">

    <div :key="showing" v-for="(showing, i) in rooms">
      <img :src="showing.url" alt="img" class="room-img">
      <h4 @click="modal = !modal; clickNum = i">{{ showing.title }}</h4>
      <p>가격: {{ showing.price }}</p>

      <div v-if="showing.title !== '강진군 마량면 청자로'">
        <button @click="showing.report++">허위매물신고</button>
        <span>신고수 : {{showing.report}}건</span>
      </div>
      <div v-else>
        <button @click="alram">허위매물신고</button>
        <span>신고수 : {{showing.report}}건</span>
      </div>
      
    </div>
  </div>
</template>

<script>
import data from './data';
export default {
  name: 'App',
  data(){
    return {
      modal: false,
      rooms: data,
      clickNum: 0,
    }
  },
  methods: {
    alram() {
      alert('신고 하실 수 없습니다');
    }
  },
}
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}

.modal-img {
  height: 80%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

#app {
  margin: 0;
}

div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
