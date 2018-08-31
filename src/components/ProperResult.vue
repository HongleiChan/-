<template>
  <div>
    <div  class="space">
      <div class="content">
        <div class="contentchild">
          <div style="width: 20%">
            <h3 style="float: left">Cnews二分类：</h3>
            <el-button type="primary" @click="onCheck" style="float: right;margin-top: 15px">提交</el-button>
          </div>
          <cnews></cnews>
        </div>
      </div>
    </div>

    <div class="space">
      <div class="content">
        <div class="contentchild">
          <h3>textCNN分类：</h3>
          <textCNN></textCNN>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Cnews from './Cnews'
  import TextCNN from './TextCNN'
  export default {
    components:{
      'cnews':Cnews,
      'textCNN':TextCNN
    },
    name: 'hello',
    data () {
      return {
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onCheck(){
        console.log('check this')
      }
    }
  }
</script>

<style lang="css">
  .testing{
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    height: 800px;
    overflow: hidden;
    border-radius: 15px;
    border: #dcdfe6 solid 1px;
    font-size: 18px;
    margin-top: 200px;
  }
  .testingchild{
    margin-right: auto;
    margin-left: auto;
    width: 95%;
  }
</style>
