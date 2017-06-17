<template>
  <div class="thefoot">
    <ul class="tedbox">
      <li v-for="item in toolbarArr">
      <span>
      <a :href="item.link"></a>
      {{item.name}}
      </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      list: ''
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'toolbarArr'
    ])
  }
}
</script>

<style>
.thefoot {
  position: absolute;
  left: 0;
  bottom: 0;
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
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
}
 .tedbox li {
    position: relative;
    display: inline-flex;
    flex-grow: 1;
    text-align: center;
    line-height: 44px;
  }
  .tedbox li a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .tedbox li span {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 44px;
  }
</style>
