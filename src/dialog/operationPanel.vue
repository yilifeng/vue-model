<template>
  <div class='operationPanel'>
    <span class="demonstration">背景色</span>
    <el-color-picker v-model="color" @change='colorChange'></el-color-picker>
    <el-button type="primary" @click="closeRotate">closeRotate</el-button>
    <el-button type="primary" @click="startRotate">startRotate</el-button>
  </div>
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
    top: 80px;
    right: 0px;
    background-color: ghostwhite;
}
</style>
