<template>
  <div id="app">
    <div class="app_box">
      <navbar></navbar>
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition> 
      <toolbar></toolbar>
    </div>  
  </div>
</template>
<script>
  import navbar from '@/components/navbar'
  import toolbar from '@/components/toolbar'
  import { ViewBox } from 'vux'
  export default {
    components: {
      ViewBox,
      navbar,
      toolbar
    },
    data () {
      return {
        transitionName: 'slide-left',
        aa: ''
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },
    watch: {
      aa () {
      }
    },
    mounted () {
    },
    methods: {
      goback () {
        this.$router.goBack()
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>

<style lang="scss" rel="stylesheet/scss">
  @import 'assets/scss/common.scss';

  html,
  body{
    height: 100%;
  }
  #app{
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .app_box {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .child-view {
    position: absolute;
    width:100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-100%, 0);
  }
</style>
