<template>
  <div class="black-bg">
      <div class="white-bg">
        <img class="modal-img" :src="rooms[clickNum].url" alt="img">
        <h4>{{ rooms[clickNum].title }}</h4>
        <p>{{rooms[clickNum].content}}</p>
        <input @input="month = $event.target.value" type="number">
        <p>{{ month }}개월 선택, 가격 : {{rooms[clickNum].price}}</p>
        <button @click="$emit('closeModal')">모달 닫기</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            month: 1,
        }
    },
    props: {
        rooms : Array,
        modal : Boolean,
        clickNum: Number,
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