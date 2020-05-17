import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// setting for axios
// setting global request configuration
import axios from 'axios';

axios.defaults.baseURL = 'https://stock-trader-universe.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json/post';

// interceptor
const reqInterceptor = axios.interceptors.request.use(function(config) {

  console.log('Request Interceptor', config);
  // need to return config at least
  return config;
}, function(err) {
  // Do something with request error
  return Promise.reject(err);
});

const resInterceptor = axios.interceptors.response.use(function(res) {
  console.log('Response Interceptor', res);
  return res;
}, function(err) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(err);
});

// remove interceptor
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);


// custom axios instances
// instead of using global axios instance, you can create custom axios instance for each services


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
