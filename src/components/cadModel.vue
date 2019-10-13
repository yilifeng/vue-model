<template slot="preview">
  <div>
    <input type="file" id="img" @change="uploadImg" />
    <stl-model-load ref="stlModel"
      v-if="imgUrl !== '' || fileType === 'stl'"
      :url="imgUrl">
    </stl-model-load>
  </div>
</template>

<script>
import StlModel from '@/models/stl-model'
export default {
  name: 'demo-stl',
  components: {
    'stl-model-load': StlModel
  },
  data () {
    return {
      imgUrl: 'static/models/flyHouse.stl',
      fileType: ''
    }
  },
  methods: {
    uploadImg (e) {
      let file = e.target.files[0]
      if (!/\.(stl|stp)$/.test(file.name)) {
        alert('请确保文件类型:stl / stp')
        return false
      }
      let reader = new FileReader()
      reader.readAsDataURL(file)
      let that = this
      reader.onload = function (e) {
        that.imgUrl = e.target.result
        let strs = file.name.split('.')
        this.fileType = strs[strs.length - 1]
        if (that.$refs !== undefined && that.$refs.stlModel !== undefined) {
          that.$refs.stlModel.handleProgress()
        }
      }
    }
  }
}
</script>
