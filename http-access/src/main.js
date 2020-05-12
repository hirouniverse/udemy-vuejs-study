import Vue from 'vue'
import App from './App.vue'

// configure vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'https://hironorik-sandbox.firebaseio.com/';
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if (req.method == 'POST') {
    req.method = 'PUT';
  }
  next(res => {
    res.json = () => {
      return {
        messages: res.body
      };
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
