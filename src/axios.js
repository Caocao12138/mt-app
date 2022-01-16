import axios from 'axios'

// 默认请求域名
axios.defaults.baseURL = 'http://api.duyiedu.com'
// 拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers.Accept = 'application/json;charset=UTF-8'
  config.params = {
    ...config.params,
    appkey: 'Yuyic_1590682606005'
  }
  return config
}, error => {
  return Promise.reject(error)
})
export default axios
