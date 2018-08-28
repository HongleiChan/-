<template>
  <div>
    <h2 align="center">结果显示</h2>
    <div align="center" style="padding-top: 20px">
      <router-link :to="{name:'Cews'}"><el-radio v-model="radio" label="1" border>cews二分类</el-radio></router-link>
      <router-link :to="{name:'TextCNN'}"><el-radio v-model="radio" label="2" border>textCNN分类</el-radio></router-link>
      <router-view></router-view>
    </div>
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
    <div style="margin-bottom: 0px" align="center">
      <router-link :to="{name:'ProperRsult'}">
        <el-button type="primary">返回</el-button>
      </router-link>
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
