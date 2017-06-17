import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes
})
