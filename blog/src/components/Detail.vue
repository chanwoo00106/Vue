<template>
    <div>
        <h4>상세페이지</h4>
        <h5>{{blogData[$route.params.id].title}}</h5>
        <p>{{blogData[$route.params.id].title}}</p>
        <router-view></router-view>
        <button @click="$router.go(-1)" type="button" class="btn btn-secondary">뒤로가기</button>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        blogData: Array,
    }
}
</script>

<style>

</style>