<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>{{name}}<i class="el-icon-caret-bottom"></i></dt>
            <dd>
                <h3 class="select-title">{{name}}</h3>
                <span v-for="(item, index) in list" :key="index">{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
  name: 'searchProduct-categroy-select', // 搜索商品后-跳转的主页面-分类 / 区域模块 - 模块每个类目的选择器 父级: category.vue
  props: [
    'name',
    'list'
  ]
}
</script>

<style>

</style>
