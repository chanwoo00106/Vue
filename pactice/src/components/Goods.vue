<template>
    <div>
        <img :src="room.url" alt="img" class="room-img">
        <h4 @click="$emit('openModal')">{{ room.title }}</h4>
        <p>가격: {{ room.price }}</p>

        <div v-if="room.title !== '강진군 마량면 청자로'">
            <button @click="$emit('increase')">허위매물신고</button>
            <span>신고수 : {{room.report}}건</span>
        </div>
            <div v-else>
            <button @click="alram">허위매물신고</button>
            <span>신고수 : {{room.report}}건</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Goods',
    props: {
        room: Object,
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