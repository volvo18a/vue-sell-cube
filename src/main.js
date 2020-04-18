import Vue from 'vue'
import './cube-ui'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'
import ratings from './components/ratings/ratings.vue'
import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', redirect: 'goods' },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
