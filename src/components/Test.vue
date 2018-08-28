<template>
  <div>
    <p align="center" style="margin-bottom: 20px">
      <router-link :to="{name:'BasicTest'}"><el-button size="medium" name="Basic">基本分类</el-button></router-link>
      <router-link :to="{name:'ProperTest'}"><el-button size="medium" name="Proper">专属分类</el-button></router-link>
    </p>
  </div>
</template>

<script>
  export default {
    watch:{
      'name':function (val) {
        let urlStr = '/' + val;
        this.$router.push(urlStr);
      }
    }
  }
</script>

<style>

</style>
