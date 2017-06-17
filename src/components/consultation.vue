<template>
  <div :style="{position: 'relative', width: '100%', height: '100%'}">
    <div class="respondent" @click="cli">
      <div class="headBox">
        <div class="portrait" style="background-image: url(__uri(images/expic01.jpg));"></div>
      </div>
      <div class="bodyBox">
        <p>
          <span class="name">杨丽杨丽红红</span>
          <span class="title">律律师律师律师师</span>
          <span class="company">上海某上海某某律师事务所上海某某律师事务所某律师事务所</span>
        </p>
        <p><span class="major">专业领域: 婚姻继承 邻里纠纷 劳动争议 劳动争议 劳动争议 劳动争议</span></p>
      </div>
      <div class="footBox">
        <div class="switchBall">
          <div class="linemor">
            <div class="line"></div>
          </div>
        </div>
        <span class="over">结束咨询</span>
      </div>
    </div>
   <div id="onea" :style="{height: windHeit + 'px'}">
     <ul class="chatBox">
        <li class="goTo">
          <div class="head" style="background-image: url(__uri(images/timg.jpg));"></div>
          <div class="content">请</div>
        </li>
        <li class="goTo">
          <div class="head" style="background-image: url(__uri(images/timg.jpg));"></div>
          <div class="content">请问最低工资标准有什么？</div>
        </li>
        <li class="goTo">
          <div class="head" style="background-image: url(__uri(images/timg.jpg));"></div>
          <div class="content">请问最低工资请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？标准有什么？</div>
        </li>
        <li class="goNews">
          <span class="innerCont">
            在线咨询仅供参考，若需要更精准的详细咨询，建议携带书面材料与专家面谈。
          </span>
        </li>
        <li class="goIn">
        <div class="head" style="background-image: url(__uri(images/expic01.jpg));"></div>
          <div class="content">根据您所在城市不同，有不同的最低工资标准，您可以在百度上方便的搜索到本年度您所在地区的最低工资标准。</div>
        </li>
                <li class="goTo">
          <div class="head" style="background-image: url(__uri(images/timg.jpg));"></div>
          <div class="content">请</div>
        </li>
        <li class="goTo">
          <div class="head" style="background-image: url(__uri(images/timg.jpg));"></div>
          <div class="content">请问最低工资标准有什么？</div>
        </li>
        <li class="goTo move">
          <div class="head" style="background-image: url(__uri(images/timg.jpg));"></div>
          <div class="content">请问最低工资请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？请问最低工资标准有什么？标准有什么？</div>
        </li>
        <li class="goNews">
          <span class="innerCont">
            在线咨询仅供参考，若需要更精准的详细咨询，建议携带书面材料与专家面谈。
          </span>
        </li>
        <li class="goIn">
          <div class="head" style="background-image: url(__uri(images/expic01.jpg));"></div>
          <div class="content">根据</div>
        </li>
        <div class="diark"></div>
      </ul>
   </div>
  </div>
</template>

<script>
import Iscroll from 'iscroll'
export default {
  components: {
  },
  data () {
    return {
      windHeit: 0,
      trans: 0,
      myScroll: ''
    }
  },
  methods: {
    cli () {
      let num = document.querySelector('.chatBox').offsetHeight - this.windHeit
      this.myScroll.scrollTo(0, -num, 0)
    }
  },
  created () {
    this.windHeit = document.querySelector('body').offsetHeight - 90
    setTimeout(() => {
      this.myScroll = new Iscroll('#onea')

      console.log()
    }, 500)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../assets/scss/common";
#onea {
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;
  padding-top: 40px;
  box-sizing: border-box;
} 
.card-block{
  padding: $module-padding;
  background: red;
  ul{
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    list-style: none;
   padding-bottom: 40px;
   box-sizing: border-box;
  }
  li{
    width: 100%;
    height: 20px;
    margin-bottom: $module-padding;
    text-align: center;
    &:last-child{
      margin-bottom: 0;
    }
  }
}
.dark {
  width: 100%;
  height: 50px;
  background: #f5f5f5;
}
.respondent {
  position: relative;
  width: 100%;
  height: 1.52rem;
  background: $white;
  box-sizing: border-box;
  z-index: 8888888888;
  .headBox {
    position: relative;
    width: 25%;
    height: 100%;
    float: left;
    .portrait {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background-size: cover;
    }
  }
  .bodyBox {
    position: relative;
    width: 55%;
    height: 100%;
    float: left;
    background: $white;
    p {
      position: relative;
      width: 100%;
      height: 50%;
      margin: 0;
      font-size: .28rem;
      color: $gray-light;
      text-align: left;
      line-height: 0.76rem;
      display: block;
    }
    .name {
      display: block;
      height: 100%;
      width: 1rem;
      float: left;
      font-size: .28rem;
      color: $gray-dark;
      padding-top: .2rem;
      box-sizing: border-box;
      overflow: hidden;
    }
    .title {
      display: block;
      float: left;
      min-width: .05rem;
      max-width: 1.25rem;
      height: .35rem;
      margin-top: .36rem;
      margin-left: .1rem,;
      text-align: center;
      line-height: .35rem;
      padding: 0 .05rem 0 .05rem;
      box-sizing: border-box;
      font-size: 12px;
      color: $white;
      border-radius: 3px;
      background: red;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .company {
      display: block;
      height: 100%;
      width: 1.5rem;
      margin-left: .1rem,;
      float: left;
      font-size: .24rem;
      color: $gray-light;
      padding-top: .2rem;
      box-sizing: border-box;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .major {
      height: 100%;
      width: 100%;
      float: left;
      font-size: .28rem;
      color: $gray-light;
      box-sizing: border-box;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }

  .footBox {
    position: relative;
    width: 20%;
    height: 100%;
    padding-top: .33rem;
    box-sizing: border-box;
    float: left;
    background: $white;
    .switchBall {
      position: relative;
      margin: 0 auto;
      width: .3rem;
      height: .3rem;
      border: 1px solid $gray-light;
      border-radius: 50%;
    }
    .linemor {
      position: relative;
      margin: 0 auto;
      margin-top: -.05rem;
      width: .13rem;
      height: .16rem;
      background: $white;
    }
    .line {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      width: 1px;
      height: .16rem;
      background: $gray-light;
    }
    .over {
      margin-top: .15rem;
      display: block;
      text-align: center;
      font-size: 12px;
      color: $gray-light;
    }
    &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 1px;
      height: .72rem;
      background: $gray-nwe-lighter;
      content: "";
    }
  }
}
.chatBox {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  background: none;
  box-sizing: border-box;
  li {
    position: relative;
    width: 100%;
    height: auto;
    padding: .18rem .32rem .18rem .32rem;
    box-sizing: border-box;
    &:before,
    &:after {
      content: " "; // 1
      display: table; // 2
    }
    &:after {
      clear: both;
    }
  }
  .goTo {
    .head {
      width: .88rem;
      height: .88rem;
      border-radius: 50%;
      float: right;
      background-size: cover;
    }
    .content {
      position: relative;
      min-width: .5rem;
      max-width: 5rem;
      min-height: .8rem;
      float: right;
      margin-right: .25rem;
      padding: .2rem .25rem .2rem .25rem;
      box-sizing: border-box;
      border-radius: 3px;
      background: $green;
      color: $white;
      font-size: .3rem;
      &:after {
        position: absolute;
        right: -.1rem;
        top: .3rem;
        width: .23rem;
        height: .23rem;
        background: $green;
        content: "";
        border-radius: 3px;
        transform: rotate(45deg);
      }
    }
  }
   .goIn {
    .head {
      width: .88rem;
      height: .88rem;
      border-radius: 50%;
      float: left;
      background-size: cover;
    }
    .content {
      position: relative;
      min-width: .5rem;
      max-width: 5rem;
      min-height: .8rem;
      float: left;
      margin-left: .25rem;  
      padding: .2rem .25rem .2rem .25rem;
      box-sizing: border-box;
      border-radius: 3px;
      background: $white;
      color: $gray-dark;
      font-size: .3rem;
      &:after {
        position: absolute;
        left: -.1rem;
        top: .3rem;
        width: .23rem;
        height: .23rem;
        background: $white;
        content: "";
        border-radius: 3px;
        transform: rotate(45deg);
      }
    }
  }
  .goNews {
    .innerCont {
      width: 100%;
      min-height: .8rem;
      padding: .2rem .25rem .2rem .25rem;
      background: rgba(0, 0, 0, .1); 
      box-sizing: border-box;
      border-radius: 3px;
      display: block;
      text-align: center;
      color: $white;
      font-size: .3rem;
    }
  }
}
.diark {
  position: relative;
  width: 100%;
  height: 200px;
}
</style>
