import Vue from 'vue'
import App from './App.vue'

// set up VueRouter
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history', /* tell vue-router to use no-hash-tag mode */
  scrollBehavior (to, from, savedPosition) {
    /**
     * to control hash scrolling behavior, you need to set this method
     */
    if (to.hash) {
      return { selector: to.hash };
    }
    /**
     * this is the behavior that moving to specific position 
     */
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  /**
   * reject all of routing
   */
  // next(false);
  next();
});

new Vue({
  el: '#app',
  router, /* load vue-router */
  render: h => h(App)
})
