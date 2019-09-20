<template>
  <div class="layout">
    <the-header></the-header>
    
    <slot/>
    
    <the-footer></the-footer>
  </div>
</template>

<static-query>
  query {
  metaData {
  siteName
  }
  }
</static-query>

<script>
  import TheHeader from '../components/TheHeader'
  import TheFooter from '../components/TheFooter'
  export default {
    // metaInfo: {
    //   title: 'Hello, world!'
    // },
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>

<style>
  /*body {*/
  /*  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*  line-height: 1.5;*/
  /*}*/
</style>
