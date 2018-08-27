<template>
  <div>
    <el-header align="center"> <h1>文档分类</h1></el-header>
    <div>
      <el-tabs  v-model="activeName" type="card"  @tab-click="handleClick" class="tab">
        <el-tab-pane label="训练" name="Train">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-tab-pane>
        <el-tab-pane label="测试" name="Test" >
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
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
  .tab{
    text-align: center;
    vertical-align: center;
  }
</style>
