import Vue from 'vue'
import App from './App.vue'

// setup store
import { store } from './store/store';

new Vue({
  el: '#app',
  store, // load store
  render: h => h(App)
})
