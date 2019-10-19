<template slot="preview">
  <div>
    <load-img ref="loading"></load-img>
    <model-stl
      :src="url"
      :rotation="rotation"
      :position="position"
      :backgroundColor="color"
      @on-load="handleLoad"
      @on-progress="handleProgress"
      @on-error="handleError">
    </model-stl>
    <operation-panel type='stl'
      @startRotate="startRotate"
      @closeRotate="closeRotate"
      @colorChange="colorChange">
    </operation-panel>
  </div>
</template>

<script>
import Loading from '@/dialog/loading'
import OperationPanel from '@/dialog/operationPanel'
export default {
  name: 'stlModel',
  props: ['url'],
  components: {
    'load-img': Loading,
    'operation-panel': OperationPanel
  },
  data () {
    return {
      hasSelect: false,
      inLoading: true,
      isRotition: true,
      color: null,
      position: {
        x: 1,
        y: -11,
        z: 5
      },
      rotation: {
        x: -Math.PI / 3,
        y: 0,
        z: 0
      }
    }
  },
  methods: {
    colorChange (color) {
      this.color = color
    },
    handleProgress (e) {
      this.$refs.loading.showLoading(true)
    },
    rotate () {
      if (this.isRotition) {
        this.rotation.z += 0.01
      }
      requestAnimationFrame(this.rotate)
    },
    startRotate () {
      this.rotation = {x: -Math.PI / 3, y: 0, z: 0}
      this.position = {x: 1, y: -11, z: 5}
      this.isRotition = true
    },
    closeRotate () {
      this.rotation = {x: 0, y: 0, z: 0}
      this.position = {x: 0, y: 0, z: 0}
      this.isRotition = false
    },
    handleLoad () {
      this.rotate()
      this.$refs.loading.showLoading(false)
      this.inLoading = false
    },
    handleError (e) {
      console.log(e)
    }
  },
  mounted () {
    setTimeout(function () {
      if (this.inLoading) {
        this.handleProgress()
      }
    }, 1000)
  }
}
</script>
