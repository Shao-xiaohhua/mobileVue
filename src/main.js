// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import AMap from 'vue-amap'
import VIscroll from 'viscroll'

Vue.use(AMap)
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
