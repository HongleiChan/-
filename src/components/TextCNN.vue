<template>
  <div>

    <div>

      <div style="width: 50%;border: black;float: left">
        AI平台textCNN:
        <el-button type="primary" size="small">点击获取</el-button>
      </div>

      <div style="width: 50%;border: black;float: right ">
        增加数据集后textCNN:
        <el-button type="primary" size="small">点击获取</el-button>
      </div>

      <div class="res" style="float: left;">111111111111</div>
      <div class="res" style="float: right"></div>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style lang="css">
 .res{
   width: 49%;
   height: 270px;
   overflow: scroll;
   overflow-x: hidden;
   border:1px solid black;
 }
</style>
