<template>
  <div class="thehead">
    <div class="tedbox">
      <span class="left" @click="goback">返回</span>
      <span class="cover">沪e法</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>

<style>
.thehead {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 44px;
  background: #1b1a1f;
  text-align: left;
  line-height: 44px;
  font-size: 16px;
  color: white;
  box-sizing: border-box;
  z-index: 888;
}
.tedbox {
  position: relative;
  width: 100%;
  height: 44px;
}
.left {
  position: absolute;
  left: 15px;
  z-index: 99999999999;
}
.cover {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
