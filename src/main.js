// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import store from './vuex/store'
import vueResource from 'vue-resource';
//    import vueForm from 'vue-form';
Vue.use(vueResource);
import 'common/css/reset.css'

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  Mint,
  vueResource,
  template: '<App/>',
  components: { App }
});
