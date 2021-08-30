<template>
  <div>

    <div class="black-bg">
      <div class="white-bg">
        <h4>상세 페이지</h4>
        <p>내용</p>
      </div>
    </div>

    <div class="menu">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/about">About</a>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div :key="showing" v-for="showing in products">
      <img :src="`./images/room${showing.id}.jpg`" alt="img" class="room-img">
      <h3>{{ showing.title }}</h3>
      <p>가격: {{ showing.price }}</p>
      <button @click="showing.report++">허위매물신고</button><span>신고수 : {{showing.report}}건</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      products: [
        {id: 0, title: '강진군 마량면 청자로', price: '100000000000원', report: 0},
        {id: 1, title: '완도군', price: '10원', report: 19348528},
        {id: 2, title: '충주마을', price: '공짜', report: 790820820},
        {id: 3, title: '임실', price: '치즈 하나 사면 공짜', report: 892972978408},
        {id: 4, title: '인천마을', price: '평당 1원', report: 497}
      ],
    }
  },
  methods: {
    increase() {
      console.log(this.products)
    }
  },
}
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
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
