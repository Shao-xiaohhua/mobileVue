<template>
  <div class="fare">
     <view-box ref="viewBox">
     <navbar slot="header"></navbar>
     <div class="box">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
     </div>
      <toolbar slot="bottom"></toolbar> 
   </view-box>
  </div>
</template>

<script>
  import navbar from './navbar'
  import toolbar from './toolbar'
  import { ViewBox, XHeader, Tabbar, TabbarItem, Cell } from 'vux'
  export default {
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      navbar,
      Cell,
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

<style>
  .fare {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .box {
    position: relative;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin-top: 44px;
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
  .header {
    position:absolute;
    height:44px;
    background:#0058f1;
    width:100%
  }
</style>
