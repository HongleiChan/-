<template>
  <div>
    <div style="padding-top: 20px">
      <div style="width: 50%;height: auto;border: black;float: left">
        <p style="float:left;">AI平台textCNN:</p>
        <el-button type="primary" style="float:right;margin-right: 50%">点击获取</el-button>
      </div>
      <div style="width: 50%;height: auto;border: black;float: right">
        <p style="float:left;">增加数据集后textCNN:</p>
        <el-button type="primary" style="float:right;margin-right: 50%">点击获取</el-button>
      </div>
    </div>
    <div>
    <div class="res" style="float: left"></div>
    <div class="res" style="float: right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      radio:'2'
    }
  }
}
</script>

<style lang="css">
 .res{
   width: 49%;
   height: 500px;
   border:1px solid black;
 }
</style>
