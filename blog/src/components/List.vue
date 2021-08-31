<template>
  <div>
      <div v-for="blog in blogData" :key="blog">
          <h5 @click="$router.push(`/detail/${blog.number}`)">{{ blog.title }}</h5>
          <p>{{ blog.date }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        blogData: Array
    },
    methods: {
        click() {
            console.log(this.blogData);
        }
    },
}
</script>

<style>

</style>