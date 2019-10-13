<template>
  <el-container style="height: 100%">
    <el-header style="padding: 0">
      <top-header></top-header>
    </el-header>
    <el-container style="height: 100%;">
      <el-aside style="width: auto"
        @mouseenter.native="collapseOpen"
        @mouseleave.native="collapseClose">
          <left-aside
            :collapse="isCollapse"
            style="position:fixed; z-index: 99;"
            @handleSelect="changePage">
          </left-aside>
        </el-aside>
      <el-container style="margin-left: 64px">
        <el-main>
          <main-contain v-if="pageIndex === '/index'"></main-contain>
          <cad-model v-if="pageIndex === '/CADModel'"></cad-model>
          <test-test v-if="pageIndex === '/CAEModel' || pageIndex === '/forwordHandle'"></test-test>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Top from '@/components/top'
import Aside from '@/components/aside'
import Main from '@/components/main'
import CadModel from '@/components/cadModel'
import Test from '@/components/test'
export default {
  name: 'index',
  components: {
    'top-header': Top,
    'left-aside': Aside,
    'main-contain': Main,
    'cad-model': CadModel,
    'test-test': Test
  },
  data () {
    return {
      collapseBtnClick: false,
      isCollapse: true,
      pageIndex: 1
    }
  },
  methods: {
    collapseStatus () {
      this.collapseBtnClick = this.isCollapse
      this.isCollapse = !this.isCollapse
    },
    collapseOpen () {
      if (this.collapseBtnClick) return
      this.isCollapse = false
    },
    collapseClose () {
      if (this.collapseBtnClick) return
      this.isCollapse = true
    },
    changePage (data) {
      this.pageIndex = data
    }
  }
}
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
    overflow: hidden;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    overflow: hidden;
  }
  .el-container:nth-child(7) .el-aside {
    overflow: hidden;
  }
</style>
