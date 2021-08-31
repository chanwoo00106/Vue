<template>
    <div>
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
export default {
    name: 'Goods',
    props: {
        rooms: Array,
        //modal: Boolean
    },
    methods: {
        alram() {
            alert('신고 하실 수 없습니다');
        }
    },
}
</script>

<style>

</style>