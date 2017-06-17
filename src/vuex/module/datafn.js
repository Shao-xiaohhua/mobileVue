// import api from '../../fetch/api'
// import apiD from '../../fetch/api - id'

const state = {
  area: '徐汇区',
  ToPositionM: [],
  toolbarArr: [
    {name: '咨询', link: '#/'},
    {name: '精选', link: '#/hometwo'},
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
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
