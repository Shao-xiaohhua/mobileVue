<template>
  <div>
    <tab
      :oneArr="tbArr"
      :towArr="tbwArr"
    >
    <div class="aba" slot="one">
     <group title="分类（单选）">
       <popup-picker :title="title4" :data="list2" :columns="3" v-model="value4" show-name></popup-picker>
     </group>
      <group :title="'问题及背景情况'">
       <div class="textBox">
        <textarea name="" id="textOne" cols="30" rows="10" class="textAre borderTB" placeholder="请详细描述你要咨询的问题及背景情况，但不要透露具体的人名、公司名称、地址等可能涉及隐私的内容。"></textarea>
      </div>
      </group>
      <div class="theLabel">
        <span class="head">手机号码:</span>
        <input type="text" placeholder="绑定手机号，登陆APP可享受更多服务">
      </div>
      <div class="theLabel phone">
        <span class="foot">验证码:</span>
        <input type="text" placeholder="请输入验证码">
        <span class="head" @click="reciprocal">{{tex}}</span>
      </div>
      <div class="btBox">
        <x-button type="primary" v-bind:style="{ background: '#00cc99', color: 'white'}"
        >发起咨询</x-button>
        <a href="#/chatRoom"></a>
      </div>
      <p class="theP">在线咨询服务时间为工作日09：00-17：00</p>
      <p class="theP">非工作时段的咨询将自动转为留言咨询</p>
      <div class="dirk"></div>
    </div>
    <div class="aba" slot="two">
      <div class="TelephoneBanner">
        <h2>12348咨询热线</h2>
        <div class="imgBox"></div>
        <div class="theButt">立即拨打
          <i class="iconfont icon-arrow"></i>
          <a href="#"></a>
        </div>
      </div>
      <div class="phoneBox">
        <ul>
          <li class="active"><span>按1</span><p>法律咨询</p>
            <i class="iconfont icon-phone"></i>
            <a href="#"></a>
          </li>
          <li><span>按2</span><p>行政审批办事及司法考试咨询</p>
            <i class="iconfont icon-phone"></i>
            <a href="#"></a>
          </li>
          <li><span>按3</span><p>公正咨询热线</p>
            <i class="iconfont icon-phone"></i>
            <a href="#"></a>
          </li>
          <li><span>按4</span><p>监狱管理局狱务公开</p>
            <i class="iconfont icon-phone"></i>
            <a href="#"></a>
          </li>
          <li><span>按5</span><p>戒毒局所务公开</p>
            <i class="iconfont icon-phone"></i>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    <p class="theP">法律热线咨询24小时为您服务</p>
    <p class="theP">其他服务咨询时间为: 09：00-17：00</p>
    </div>
    </tab>
  </div>
</template>

<script>
import { Group, Cell, XInput, XButton, PopupPicker } from 'vux'
import tab from './tab'
export default {
  components: {
    Group,
    Cell,
    tab,
    XInput,
    XButton,
    PopupPicker
  },
  data () {
    return {
      title4: '咨询类别',
      value4: [],
      list2: [
        {
          name: '法律咨询',
          value: 'law',
          parent: 0
        },
        {
          name: '公正咨询',
          value: 'fair',
          parent: 0
        },
        {
          name: '司法鉴定咨询',
          value: 'appraisal',
          parent: 0
        },
        {
          name: '人民调解咨询',
          value: 'mediate',
          parent: 0
        },
        {
          name: '社区矫正咨询',
          value: 'community',
          parent: 0
        },
        {
          name: '婚姻继承',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '邻里纠纷',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '借贷理财',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '房屋动迁租售',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '交通事故',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '医患纠纷',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '合同纠纷',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '劳动用工',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '诉讼程序',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '刑事案件',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '行政案件',
          value: 'lawList',
          parent: 'law'
        },
        {
          name: '其他咨询',
          value: 'lawList',
          parent: 'law'
        }
      ],
      msg: '!',
      tbArr: [
        {name: '在线咨询', swite: true},
        {name: '电话咨询', swite: false}
      ],
      tbwArr: [
        {name: '在线1咨询', swite: false, bef: false, tn: 'one'},
        {name: '电话咨询', swite: false, bef: true, tn: 'two'}
      ],
      tex: '获取验证码',
      number: 10,
      set: ''
    }
  },
  methods: {
    reciprocal () {
      this.set = setInterval(() => {
        this.number--
        this.tex = this.number + 's后重新输入'
        if (this.number <= 0) {
          clearInterval(this.set)
          this.number = 10
          this.tex = '获取验证码'
        }
      }, 1000)
    }
  },
  created () {

  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../assets/scss/common";
@import "../assets/scss/_iconfont";
.dirk {
  width: 100%;
  height: 44px;
}
.theP {
  text-align: center;
  margin-top: .1rem;
  margin-bottom: .1rem;
  margin-left: .32rem;
  margin-right: .32rem;
  font-size: 13px;
  color: $gray-light;
}
.ada {
  width: 100%;
  height: auto;
}
.theLabel {
  position: relative;
  width: 100%;
  height: .9rem;
  display: block;
  margin-top: .2rem;
  box-sizing: border-box;
  font-size: .32rem;
  color: $gray-dark;
  text-align: left;
  line-height: .9rem; 
  background: $white;
  i {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .32rem;
    width: .9rem;
    height: .9rem;
    box-sizing: border-box;
    float: right;
    text-align: right;
    line-height: .9rem;
    color: $gray-light;
    display: block;
  }
  &.active-state {
    background: rgba($gray-dark, 0.1);
  }
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    content: "";
    background: $gray-nwe-lighter;
  }
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    content: "";
    background: $gray-nwe-lighter;
  }
  a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: none;
  }
  .head {
    display: block;
    width: 25%;
    height: 100%;
    padding-left: .32rem;
    float: left;
    overflow: hidden;
    font-size: .32rem;
    color: $gray-dark;
    box-sizing: border-box;
  }
  input {
    width: 75%;
    height: 100%;
    box-sizing: border-box;
    float: left;
    border: none;
    background: $white;
    font-size: .32rem;
    text-align: left;
    line-height: .9rem;
    color: $gray-light;
    outline: none;
  }
  &.phone {
    margin-top: 0;
    input {
      width: 40%;
      padding-right: .32rem;
      text-align: left;
    }
    .foot {
    display: block;
    width: 25%;
    height: 100%;
    padding-left: .32rem;
    float: left;
    overflow: hidden;
    font-size: .32rem;
    color: $gray-dark;
    box-sizing: border-box;
    }
    .head {
      position: relative;
      padding: 0;
      width: 35%;
      color: $green;
      text-align: center;
      &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 1px;
        height: 60%;
        background: $gray-nwe-lighter;
        content: "";
      }
    } 
    &:before {
      height: 0;
    }
  }
}
.textBox {
  position: relative;
  width: 100%;
  height: auto;
}
.textAre {
  position: relative;
  display: block;
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  border: none;
  padding: .27rem .32rem .27rem .32rem;
  font-size: 16px;
  color: $gray-light;
  resize:none;
  outline: none;
}
.btBox {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
}

/* 电话咨询 */

.TelephoneBanner {
  position: relative;
  width: 100%;
  height: 2.64rem;
  margin-top: .2rem;
  margin-bottom: .2rem;
  padding-top: 1.6rem;
  padding-left: 4.9rem;
  box-sizing: border-box;
  background: $green;
  .imgBox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .7rem;
    margin: auto;
    width: 2.43rem;
    height: 2.3rem;
    background: url("../assets/images/phone_banner.png");
    background-size: 100% 100%;
  }
  .theButt {
    position: relative;
    width: 2rem;
    height: .6rem;
    padding-left: .2rem;
    box-sizing: border-box;
    border: 1px solid $white;
    border-radius: 30px;
    color: $white;
    text-align: left;
    line-height: .6rem;
    font-size: .32rem;
    i {
      position: absolute;
      right: 0;
      top: 0;
      width: .6rem;
      height: 100%;
      padding-left: .15rem;
      text-align: left;
      box-sizing: border-box;
      line-height: .6rem;
      display: block;
      font-size: .32rem;
    }
    a {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    position: absolute;
    right: .65rem;
    top: .6rem;
    margin: 0;
    font-size: .52rem;
    color: $white;
    font-weight: normal;
    display: block;
  }
}

.phoneBox {
  width: 100%;
  height: auto;
  margin-bottom: .5rem;
  padding-right: .32rem;
  padding-left: .32rem;
  box-sizing: border-box;
  ul {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    list-style: none;
    background: $white;
    border-radius: 10px;
    li {
      position: relative;
      width: 100%;
      height: 1.08rem;
      &.active {
        i {
          color: $green;
        }
      }
      a {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    li:last-child {
      &:after {
        background: $white;
      }
    }
    span {
      width: 15%;
      height: 100%;
      float: left;
      display: block;
      text-align: center;
      line-height: 1.08rem;
      font-size: .32rem;
      color: $gray-dark;
    }
    p {
      width: 75%;
      height: 100%;
      margin: 0;
      text-align: left;
      line-height: 1.08rem;
      font-size: .32rem;
      color: $gray-dark;
      float: left;
      display: block;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    i {
      width: 10%;
      height: 100%;
      float: left;
      display: block;
      text-align: center;
      line-height: 1.08rem;
      font-size: .32rem;
      color: $gray-light;
    }
  }
}

</style>
