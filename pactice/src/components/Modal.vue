<template>
  <div class="black-bg">
      <div class="white-bg">
        <img class="modal-img" :src="room.url" alt="img">
        <h4>{{ room.title }}</h4>
        <p>{{room.content}}</p>
        <!-- <input @input="month = $event.target.value" type="number"> -->

        <!-- <textarea v-model="month" cols="30" rows="10"></textarea> -->

        <!-- <select v-model="month">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> -->

        <input v-model.number="month">
        <p>{{ month }}개월 선택, 가격 : {{ room.price }}</p>
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
        room : Object,
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