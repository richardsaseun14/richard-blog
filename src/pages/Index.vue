<template>
  <Layout>
    <b-jumbotron :style="{backgroundImage: `url(${require('../assets/images/blog-bg.png')})`}">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-12 text-center justify-content-center my-auto text-white">
            <!--            <img :src="`${require('../assets/images/rich-logo.png')}`" alt="" height="300" class="mb-5 hero-img position-absolute">-->
            <p class="m-0">WELCOME TO</p>
            <h1 class="cursive mt-n1">RICHARD'S BLOG</h1>
            <b-button class="mt-5" variant="light">Start Reading</b-button>
          </div>
        </div>
      </div>
    </b-jumbotron>
    
    <div class="container bg-white mt-n6 p-5">
      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled">
<!--          <post-list></post-list>-->
          <post-list v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node"></post-list>
          </ul>
          <!--          <ul class="list-unstyled">-->
          <!--            <b-media class="mb-6" tag="li">-->
          <!--              <template v-slot:aside>-->
          <!--                <b-img blank blank-color="#bac" width="150" alt="placeholder"></b-img>-->
          <!--              </template>-->
          <!--              -->
          <!--              <h3 class="mt-0 mb-1 cursive">Why Every Developer Should Have A Blog</h3>-->
          <!--              <div class="meta mb-2 text-muted font-weight-light">-->
          <!--                <span class=""><small>Published September 14, 2016</small></span>-->
          <!--                <span class=""><small>By Richard Saseun</small></span>-->
          <!--                <small>5 min read</small>-->
          <!--              </div>-->
          <!--              -->
          <!--              <p class="mb-0">-->
          <!--                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.-->
          <!--                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc-->
          <!--                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.-->
          <!--              </p>-->
          <!--            </b-media>-->
          <!--          </ul>-->
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import PostList from '../components/PostList'

  export default {
    components: {PostList},
    metaInfo: {
      title: 'Hello, world!',

      components: {
        PostList
      }
    }
  }
</script>

<page-query>
  query {
  allPost {
  totalCount
  edges {
  node {
  id
  title
  timeToRead
  description
  date (format: "D MMMM YYYY")
  path
  }
  }
  }
  }
</page-query>

<style scoped lang="scss">
  .jumbotron {
    height: 100vh;
    border-radius: 0;
  }
  
  .hero-img {
    opacity: 0.2;
    
  }
  
  .home-links a {
    margin-right: 1rem;
  }
  
  .section {
    background: no-repeat fixed center;
  }
</style>
