<template>
  <div>
    <b-navbar class="bg-transparent" toggleable="md" type="dark" fixed="top">
      <div class="container">
        <b-navbar variant="">
          <b-navbar-brand href="#">
            <img :src="`${require('../assets/images/nav-logo.png')}`" alt="Logo" height="20">
          </b-navbar-brand>
        </b-navbar>
        
        <b-navbar-toggle target="nav-collapse">Menu</b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
          <!--        <b-navbar-nav>-->
          <!--          <b-nav-item href="#">Link</b-nav-item>-->
          <!--          <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
          <!--        </b-navbar-nav>-->
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="mr-4" href="#">JOURNAL</b-nav-item>
            <b-nav-item href="#">ABOUT</b-nav-item>
            <!--          <b-nav-form>-->
            <!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
            <!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
            <!--          </b-nav-form>-->
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
  <!--  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">-->
  <!--    <div class="container">-->
  <!--      <a class="navbar-brand" href="index.html">Start Bootstrap</a>-->
  <!--      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">-->
  <!--        Menu <i class="fas fa-bars"></i>-->
  <!--      </button>-->
  <!--      <div class="collapse navbar-collapse" id="navbarResponsive">-->
  <!--        <ul class="navbar-nav ml-auto">-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="index.html">Home</a>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="about.html">About</a>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="post.html">Sample Post</a>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="contact.html">Contact</a>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </nav>-->
</template>

<script>
  export default {
    name: "TheHeader"
  }
</script>

<style scoped>

</style>
