<template>
<el-card class="operationPanel">
  <div slot="header" class="clearfix">
    <span>模型操作</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="showOptionAction">
      {{this.showOptionText}}
    </el-button>
  </div>
  <el-form v-show="this.showOption" label-position="right" ref="form" :model="form" style="float: left;">
    <el-form-item label="背景色:">
      <el-color-picker v-model="color" @change='colorChange'></el-color-picker>
    </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="startRotate">旋转</el-button>
        <el-button @click="closeRotate">停止</el-button>
      </el-form-item>
    </el-form>
</el-card>
</template>

<script>
export default {
  name: 'operationPanel',
  props: ['type'],
  components: {
  },
  data () {
    return {
      color: '',
      showOption: true,
      showOptionText: '折叠'
    }
  },
  methods: {
    startRotate () {
      this.$emit('startRotate')
    },
    closeRotate () {
      this.$emit('closeRotate')
    },
    colorChange () {
      this.$emit('colorChange', this.color)
    },
    showOptionAction () {
      if (this.showOption) {
        this.showOptionText = '打开'
        this.showOption = false
      } else {
        this.showOptionText = '折叠'
        this.showOption = true
      }
    }
  }
}
</script>

<style scoped>
.operationPanel {
    position: absolute;
    z-index: 99;
    width: 195px;
    top: 115px;
    right: 30px;
    background-color: ghostwhite;
}
</style>
