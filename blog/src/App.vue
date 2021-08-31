<template>
  <div>
    <Header />
    <h3 class="container mt-4">그냥 블로그입니다.</h3>
    <p>- 아무말이나 적으세요 -</p>
    <router-view :blogData="blogData"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import data from './assets/data';

export default {
  components: { Header },
  name: 'App',
  data(){
    return{
      blogData: data
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
</style>
