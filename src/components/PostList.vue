<template>
  <b-media class="mb-6" tag="li">
    <template v-slot:aside>
      <b-img blank blank-color="#bac" width="150" alt="placeholder"></b-img>
    </template>
    
    <h3 class="mt-0 mb-1 cursive">{{post.title}}</h3>
    <div class="meta mb-2 text-muted font-weight-light">
      <span class=""><small>Published {{post.date}}</small></span>
      <span class=""><small>By Richard Saseun</small></span>
      <small>{{post.timeToRead }} min read</small>
    </div>
    
    <p class="mb-0">
      {{post.description}}
    </p>
  </b-media>
</template>

<script>
  export default {
    name: "PostList",

    props: ["post"],
  }
</script>

<!--<page-query>-->
<!--  query {-->
<!--  allPost {-->
<!--  totalCount-->
<!--  edges {-->
<!--  node {-->
<!--  id-->
<!--  title-->
<!--  timeToRead-->
<!--  description-->
<!--  date (format: "D MMMM YYYY")-->
<!--  path-->
<!--  }-->
<!--  }-->
<!--  }-->
<!--  }-->
<!--</page-query>-->

<style scoped lang="scss">
  .meta span:after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #800080;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    position: relative;
    top: -1px;
  }
</style>
