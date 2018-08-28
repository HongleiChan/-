<template>
  <div>
    <el-header align="center"> <h1>文档分类</h1></el-header>
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
  import Train from './components/Train'
  import Test from './components/Test'
  export default {
    components:{
      'train':Train,
      'test':Test
    },
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
