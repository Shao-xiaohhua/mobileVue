import axios from 'axios'

const URL = 'http://12348.justice.gov.cn/service/rest/dm.DataService/zx.LegalServiceCenter@'

export function fetch (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: URL + url
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  getGroup (param) {
    return fetch(param)
  },
  // 获取详细律所
  getData (param) {
    return fetch(`maplist/invoke?${param}`)
  },
  // 获取点
  getStreetMark (param) {
    return fetch(`points/invoke?${param}`)
  },
  // 获取街道
  getStreetData (param) {
    return fetch(`maplist/invoke?${param}`)
  },
  // 自动搜索
  getAuto (param) {
    return fetch(`points/invoke?${param}`)
  }
}
