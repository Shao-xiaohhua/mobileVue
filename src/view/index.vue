<template>
  <div class="vbox">
    <section>
      <section class="hbox stretch">
      <tab
        :oneArr="tbArr"
        :towArr="tbwArr"
      >
       <span class="one" slot="one">1</span>
       <span slot="two">2</span>
      </tab>
      </section>
    </section>
  </div>
</template>
<script>
import tab from '@/components/tab'
export default {
  components: {
    tab
  },
  name: 'hello',
  data () {
    return {
      tbArr: [
        {name: '在线咨询', swite: true},
        {name: '电话咨询', swite: false}
      ],
      tbwArr: [
        {name: '在线1咨询', swite: false, bef: false, tn: 'one'},
        {name: '电话咨询', swite: false, bef: true, tn: 'two'}
      ]
    }
  },
  watch: {
    lodingbox: function () {
    }
  },
  created () {
  },
  methods: {}
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .one {
    display: block;
    width: 100%;
    height: 1000px;
    background: red;
  }
</style>
