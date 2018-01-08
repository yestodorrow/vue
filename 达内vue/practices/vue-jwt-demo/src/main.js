import Vue from 'vue'
import App from './App.vue'
import Login from './assets/component/Login.vue'
import Home from './assets/component/Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import auth from './assets/auth/auth'
import './assets/'
Vue.use(VueRouter)
Vue.use(VueResource)

//在启动APP时进行校验是否有token
auth.checkAuth()

const routes= [
  {
    path:'/',redirect:'/login'
  },
  {
    path:'/login',component:Login
  },
  {
    path:'/home',component:Home
  }
]

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
