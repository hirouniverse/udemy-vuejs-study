import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home.vue';
import Portfolio from '../components/portfolio/Portfolio.vue';
import Stocks from '../components/stocks/Stocks.vue';
const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/portfolio', component: Portfolio, name: 'portfolio' },
    { path: '/stocks', component: Stocks, name: 'stocks' },
];

export default new VueRouter({
    routes,
    mode: 'history'
});