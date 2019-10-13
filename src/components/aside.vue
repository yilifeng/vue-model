<template>
    <el-menu :collapse='collapse'
      router
      :default-active="$router.path"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#d3dce6">
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        <i :class="item.icon"></i>
        <span  slot="title">{{item.navItem}}</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'aside',
  props: ['collapse'],
  data () {
    return {
      navList: [
        {name: '/index', icon: 'el-icon-location', navItem: '主页'},
        {name: '/CADModel', icon: 'el-icon-document', navItem: 'CAD Model'},
        {name: '/CAEModel', icon: 'el-icon-printer', navItem: 'CAE Model'},
        {name: '/forwordHandle', icon: 'el-icon-edit-outline', navItem: '前处理'}
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$emit('handleSelect', key)
    }
  }
}
</script>

<style scoped>
  .el-menu {
    text-align: -webkit-left;
    height: -webkit-fill-available;
    overflow: hidden;
  }
</style>
