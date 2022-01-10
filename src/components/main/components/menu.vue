<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.icon"></i>{{ item.titel }}<span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="(item, index) in curDetail.children">
        <h4 :key="index">{{ item.titel }}</h4>
        <router-link
          to="/"
          v-for="(v, i) in item.children"
          :key="v + '_' + i"
          >{{ v }}</router-link
        >
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-left-menu', // 中间左侧菜单区域
  data () {
    return {
      curDetail: null,
      menuList: [
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '外卖',
          icon: 'takeout',
          children: [
            {
              titel: '外卖',
              children: ['美团外卖']
            }
          ]
        },
        {
          titel: '酒店',
          icon: 'hotel',
          children: [
            {
              titel: '酒店星级',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        }, {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },

        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        },
        {
          titel: '美食',
          icon: 'food',
          children: [
            {
              titel: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉'
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 鼠标移入菜单显示二级栏
    menuEnter (item) {
      this.curDetail = item
    },
    // 鼠标移出菜单消失二级栏
    menuLeave () {
      let self = this
      this.timer = setTimeout(function () {
        self.curDetail = null
      }, 200)
    },
    // 鼠标移到二级栏保持显示
    detailEnter () {
      // console.log('1')
      clearTimeout(this.timer)
    },
    // 鼠标移出二级栏消失
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>

<style lang="scss">
// 38:00
@import "@/assets/css/index/index.scss";
</style>
