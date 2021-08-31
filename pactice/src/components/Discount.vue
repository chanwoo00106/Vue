<template>
    <div v-if="discount > 0" class="discount">
      <h4>지금 구매하면 {{discount}}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'Discount',
    props: {
        discount: Number,
    }
}
</script>

<style>
    .discount {
        background: #eee;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
    }
</style>