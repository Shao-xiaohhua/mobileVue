// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VIscroll from 'viscroll'
// 路由状态发起时
router.beforeEach(function (to, from, next) {
  next()
})
// 路由结束
router.afterEach(function (to) {
})

Vue.use(VIscroll, {
  mouseWheel: true,
  vScrollbar: true,
  click: true,
  preventDefault: true,
  tap: true,
  bounce: false,
  disableTouch: true,
  scrollbars: 'custom',
  fadeScrollbars: true,
  interactiveScrollbars: true,
  shrinkScrollbars: 'scale'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
