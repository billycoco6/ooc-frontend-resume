<template>
  <div class="posts">
    <h1>Welcome to Feeds</h1>
    <div class="container">
    <feeds-component-box></feeds-component-box>
    <feeds-component-box></feeds-component-box>
    <feeds-component-box></feeds-component-box>
    <feeds-component-box></feeds-component-box>
    <div class="row">
        <div class = "col-md-6">
            <button type="button" class="btn btn-danger btn-block" @click="limitNumber += 2">SHOW MORE...</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PostsApi from '../../api/posts.js'

export default {
  name: 'posts',
  components: {
    FeedsComponentBox: require('./FeedsComponent')
  }
}
</script>

<style scoped>
  .posts {
    padding: 0 10px;
  }
</style>
