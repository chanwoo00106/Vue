<template>
  <div>
    <div class="menu">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/about">About</a>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div :key="showing" v-for="showing in products">
      <h3>{{ showing.title }}</h3>
      <p>가격: {{ showing.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      products: [
        {title: '강진군 마량면 청자로', price: '100000000000원'},
        {title: '완도군', price: '10원'},
        {title: '충주마을', price: '공짜'},
        {title: '임실', price: '치즈 하나 사면 공짜'},
        {title: '인천마을', price: '평당 1원'}
      ],
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
</style>
