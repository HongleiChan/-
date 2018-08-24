<template>
  <div>
    <el-header align="center"> <h1>xxxx</h1></el-header>
    <div>
      <el-tabs v-model="activeName" type="card"  @tab-click="handleClick" >
        <el-tab-pane label="训练" name="first" ></el-tab-pane>
        <el-tab-pane label="测试" name="second"></el-tab-pane>
      </el-tabs>
    </div><br/><br/>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName:'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>

</style>
