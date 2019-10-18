<template>
<el-card class="operationPanel">
  <el-form ref="form" :model="form" style="float: left;">
    <el-form-item label="背景色:">
      <el-color-picker v-model="color" @change='colorChange'></el-color-picker>
    </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="startRotate">旋转</el-button>
        <el-button type="primary" @click="closeRotate">停止</el-button>
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
      color: ''
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
    }
  }
}
</script>

<style scoped>
.operationPanel {
    position: absolute;
    z-index: 99;
    height: 300px;
    width: 300px;
    top: 115px;
    right: 30px;
    background-color: ghostwhite;
}
</style>
