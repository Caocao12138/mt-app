
import axios from '@/axios.js'

var api = {
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', {params})
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  },
  getCatgroyList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  // 区域列表子类目
  getRegionList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  // 猜你喜欢
  getRecommend () {
    return axios.get('/api/meituan/list/recommend.json')
  }
}

export default api
