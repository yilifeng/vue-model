<template slot="preview">
  <div>
    <div id="over" class="overLoading"></div>
    <div id="layout" class="layoutLoading"><img src="static/images/loading1.gif" /></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  methods: {
    showLoading (show) {
      if (!show) {
        document.getElementById('over').style.display = 'none'
        document.getElementById('layout').style.display = 'none'
      } else {
        document.getElementById('over').style.display = 'block'
        document.getElementById('layout').style.display = 'block'
      }
    }
  }
}
</script>

<style scoped>
  .overLoading {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    opacity:0.5;
    z-index: 1000;
  }
  .layoutLoading {
    display: none;
    position: absolute;
    top: 40%;
    left: 40%;
    width: 20%;
    height: 20%;
    z-index: 1001;
    background-color: transparent;
    text-align:center;
  }
</style>
