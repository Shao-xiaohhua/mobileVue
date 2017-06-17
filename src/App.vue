<template>
  <div id="app">
      <view-box ref="viewBox">
        <navbar slot="header"></navbar>
        <div class="app_box">
          <transition :name="transitionName">
            <router-view class="child-view"></router-view>
          </transition>
        </div>  
        <toolbar slot="bottom"></toolbar>
      </view-box> 
  </div>
</template>
<script>
  import navbar from '@/components/navbar'
  import toolbar from '@/components/toolbar'
  import { ViewBox } from 'vux'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      ViewBox,
      navbar,
      toolbar
    },
    data () {
      return {
        transitionName: 'slide-left',
        aa: this.$router.isBack
      }
    },
    watch: {
      area () {
        if (this.area) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
      }
    },
    mounted () {
      console.log(this.area)
    },
    methods: {
    },
    computed: {
      ...mapGetters([
        'area'
      ])
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
