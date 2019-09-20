<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
<!--          <p class="copyright text-muted">Copyright &copy; Your Website 2019</p>-->
          <div class="justify-content-center text-center">
            <img :src="`${require('../assets/images/logo-gray.png')}`" alt="" height="30" class="mb-2">
            <p class="copyright text-muted">Created with ❤ by <a class="link" href="//gridsome.org">RichardSaseun</a> . Powered by <a class="link" href="//gridsome.org">Gridsome</a></p>
          </div>
          
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "TheFooter"
  }
</script>

<style scoped>

</style>
