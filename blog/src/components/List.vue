<template>
  <div>
      <div v-for="blog in blogData.blogData" :key="blog">
          <h5>{{ blog.title }}</h5>
          <p>{{  blog.date  }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        blogData: Object
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