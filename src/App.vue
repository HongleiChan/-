<template>
  <div >
    <el-header> <h1  align="center">文档分类</h1></el-header>

    <div>
      <el-tabs  v-model="activeName" type="card"  @tab-click="handleClick"  stretch>
        <el-tab-pane label="训练" name="Train">
        </el-tab-pane>
        <el-tab-pane label="测试" name="Test" >
        </el-tab-pane>
      </el-tabs>
    </div>

    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        activeName:'Train'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    watch:{
      'activeName':function (val) {
        let urlStr = '/' + val;
        this.$router.push(urlStr);
      }
    }
  }
</script>

<style>
</style>
