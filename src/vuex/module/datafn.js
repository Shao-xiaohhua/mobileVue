// import api from '../../fetch/api'
// import apiD from '../../fetch/api - id'
import router from '../../router'
const state = {
  area: true,
  ToPositionM: [],
  toolbarArr: [
    {name: '咨询', link: '#/'},
    {name: '精选', link: '#/chatRoom'},
    {name: '专家', link: '#/homethree'},
    {name: '我的', link: ''}
  ]
}

const getters = {
  area: state => state.area,
  ToPositionM: state => state.ToPositionM,
  toolbarArr: state => state.toolbarArr
}

const actions = {
  acGoBack ({commit}) {
    commit('goBack')
  },
  acGoNext ({commit}) {
    commit('goNext')
  }
}

const mutations = {
  goBack (state, opt) {
    state.area = true
    router.goBack()
  },
  goNext (state, opt) {
    state.area = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
