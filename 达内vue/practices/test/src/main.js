import Vue from 'vue'
import App from './App.vue'
import Header from './component/Header.vue'
import Home from './component/Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

//在启动APP时进行校验是否有token


const routes= [
  {
    path:'/',redirect:'/header'
  },
  {
    path:'/header',component:Header
  },
  {
    path:'/home',component:Home
  },
  {
    path:'/login2',component:Home
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
