// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './sass/app.scss'

import VueFullPage from 'vue-fullpage.js'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions


export default function (Vue, {router, head, isClient}) {
  Vue.use(VueFullPage);
  Vue.use(BootstrapVue);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
