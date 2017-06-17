<template>
  <div class="boxS">
    <ul class="tabAwarp">
      <li 
        v-for="(item, index) in tabArr" href="#" class="tab-link"
        v-bind:class="{ active: item.swite}"
        @click="active(index)"
      ><span>{{item.name}}</span></li>
    </ul>
    <div class="tabWarp">
      <ul  v-bind:style="{ 
        width: wiht + 'px',
        left: -goLeft + 'px',
        transition: anim
         }">
        <li v-for="(item, index) in pageArr"
            v-bind:class="{ after: pageArr[index].swite, 
            'before': pageArr[index].bef}"
            v-bind:style="{ width: wihtLi + 'px' }"
        ><slot :name="item.tn"></slot></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  props: [
    'oneArr',
    'towArr'
  ],
  data () {
    return {
      msg: '!',
      tabArr: this.oneArr,
      pageArr: this.towArr,
      num: 0,
      wiht: 0,
      wihtLi: 0,
      goLeft: 0,
      ulHeight: 0,
      anim: 'left .3s ease'
    }
  },
  computed: {
  },
  methods: {
    active (index) {
      let len = this.tabArr.length
      for (let i = 0; i < len; i++) {
        this.tabArr[i].swite = false
        if (i < index) {
          this.pageArr[i].swite = true
        } else if (i > index) {
          this.pageArr[i].bef = true
        } else if (i === index) {
          this.pageArr[i].bef = true
        }
      }
      this.tabArr[index].swite = true
      this.pageArr[index].swite = false
      this.pageArr[index].bef = false
      this.goLeft = index * this.wihtLi
    }
  },
  created () {
    this.wiht = (document.querySelector('body').offsetWidth * this.pageArr.length)
    this.wihtLi = document.querySelector('body').offsetWidth
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../assets/scss/common";
.boxS {
  position: relative;
  width: 100%;
  height: auto;
}
 .tabAwarp {
  position: relative;
  width: 100%;
  height: .97rem;
  background: $white;
  padding-left: 0;
  list-style: none;
  box-sizing: border-box;
  overflow-x: hidden; 
  display: flex;
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    content: "";
    background: $gray-nwe-lighter;
  }
  li {
    position: relative;
    display: inline-flex;
    flex-grow: 1;
    text-align: center;
    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      padding-left: .32rem;
      padding-right: .32rem;
      box-sizing: border-box;
      text-align: center;
      font-size: .32rem;
      line-height: .97rem;
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 1.78rem;
      height: 3px;
      content: "";
      background: $white;
    }
    }
  }
  li.active {
    span {
      color: $green;
    }
    span:after {
      background: $green;
    }
  }
 }
.buttons-row {
    position: relative;
    width: 100%;
    height: .97rem;
    background: $white;
    display: flex;
    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      content: "";
      background: $gray-nwe-lighter;
    }
  .tab-link {
    position: relative;
    display: inline-flex;
    flex-grow: 1;
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1.78rem;
    height: 3px;
    content: "";
    background: $white;
    }
  }
  .topSP {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    line-height: .97rem;
    font-size: .32rem;
    color: $gray-dark;
  }
  .tab-link.active {
    span {
      color: $green;
    }
    &:after {
      background: $green;
    }
  }
 }
 .tabWarp {
  position: relative;
  width: 100%;
  height: auto;
  overflow-x: hidden; 
  ul {
    position: relative;
    left: 0;
    top: 0;
    height: auto;
    margin: 0;
    padding-left: 0;
    list-style: none;
    transition: position .3s ease;
      &:before,
      &:after {
        content: " "; // 1
        display: table; // 2
      }
      &:after {
        clear: both;
      }
    li {
      height: auto;
      float: left;
    }
   }
 }
</style>
