<template>
<div  class="categroy">
  <dl class="m-categroy">
    <dt>{{title}}</dt>
    <dd v-for="(item, index) in listAZ" :key="index">
      <a :href="'#city-'+item">{{item}}</a>
    </dd>
  </dl>
  <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-'+index">
    <dt>{{index}}</dt>
    <dd v-for="city in item" :key="city.id"><span>{{city.name}}</span></dd>
  </dl>
    </div>
</template>

<script>
export default {
  name: 'changeCity-selectLetter', // 切换城市页面-按拼音首字母选择
  data () {
    return {
      cityGroup: []
    }
  },
  props: [
    'listAZ',
    'title'
  ],
  created () {
    // eslint-disable-next-line no-unused-vars
    let cityList = [{
      'id': 20,
      'name': '广州',
      'pinyin': 'guangzhou',
      'acronym': 'gz',
      'rank': 'S',
      'firstChar': 'g'
    },
    {
      'id': 30,
      'name': '深圳',
      'pinyin': 'shenzheng',
      'acronym': 'sz',
      'rank': 'S',
      'firstChar': 's'
    },
    {
      'id': 301,
      'name': '深圳',
      'pinyin': 'shenzheng',
      'acronym': 'sz',
      'rank': 'S',
      'firstChar': 'c'
    },
    {
      'id': 3021,
      'name': '深圳',
      'pinyin': 'shenzheng',
      'acronym': 'sz',
      'rank': 'S',
      'firstChar': 'b'
    },
    {
      'id': 30121,
      'name': '深圳',
      'pinyin': 'shenzheng',
      'acronym': 'sz',
      'rank': 'S',
      'firstChar': 'd'
    },
    {
      'id': 30113,
      'name': '深圳',
      'pinyin': 'shenzheng',
      'acronym': 'sz',
      'rank': 'S',
      'firstChar': 'f'
    }
    ]
    let obj = {}
    cityList.forEach((item) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = []
      }
      obj[item.firstChar.toUpperCase()].push(item)
    })
    this.cityGroup = obj
  },
  methods: {

  }
}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/categroy.scss';
</style>
