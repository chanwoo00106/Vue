<template>
  <div> 
    <!-- <p>{{now2}} {{counter}}</p>
    <p>{{now()}} {{counter}}</p> -->
    <button @click="counter++">counter</button>
    <div class="header">
      <ul class="header-button-left">
        <li v-if="step !== 0" @click="step--">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step !== 2" @click="step++">Next</li>
        <li v-else @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container filter @write="text = $event" :data="data" :step="step" :imgUrl="imgUrl" />

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
    <p>{{$store.state.more}}</p>
    <button @click="$store.dispatch('getData')">더보기 버튼</button>

    <!-- TAB -->
    <!-- <div v-if="step === 0">내용0</div>
    <div v-if="step === 1">내용1</div>
    <div v-if="step === 2">내용2</div>
    <button @click="step = 0">버튼0</button>
    <button @click="step = 1">버튼1</button>
    <button @click="step = 2">버튼2</button> -->

  </div>
</template>

<script>
import data from './assets/data'
import Container from './components/Container.vue'
import {mapState} from 'vuex'


export default {
  components: { Container },
  name: 'App',
  data() {
    return {
      data: data,
      step: 0,
      imgUrl: '',
      text: '',
      choiceFilter: '',
      counter: 0,
    }
  },
  methods: {
    upload(e) {
      const a = e.target.files
      const url = URL.createObjectURL(a[0])
      this.imgUrl = url
      this.step++
    },
    publish() {
      const now = new Date();
      var add = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 0,
        date: `${String(now).slice(4, 7)} ${now.getDay()}`,
        liked: false,
        content: this.text,
        filter: this.choiceFilter
      }
      this.data.unshift(add)
      this.step = 0
    },
    now() {
      return new Date();
    }
  },
  computed: {
    // 처음에 한 번만 실행하고 return된 값은 끝까지 간직함
    now2() {
      return new Date();
    },
    // name() {
    //   return $store.state.likes
    // }
    ...mapState(['likes', 'clicked', 'more'])
  },
  mounted() {
    this.emitter.on('changeFilter', x => {
      this.choiceFilter = x;
    });
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
