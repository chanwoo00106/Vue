<template>
  <div class="black-bg">
      <div class="white-bg">
        <img class="modal-img" :src="rooms[clickNum].url" alt="img">
        <h4>{{ rooms[clickNum].title }}</h4>
        <p>{{rooms[clickNum].content}}</p>
        <p>가격 : {{rooms[clickNum].price}}</p>
        <!-- <button @click="modal = !modal">모달 닫기</button> -->
      </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        rooms : Array,
        modal : Boolean,
        clickNum: Number
    }
}
</script>

<style>
.modal-img {
  height: 80%;
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