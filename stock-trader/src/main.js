import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import routes from './routes/';

// vue-router setting
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes,
});

//
import store from './store/store';


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});


Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-universe.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
