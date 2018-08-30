<template>
  <div style="margin-top: 300px">
    <h2 align="center">结果显示</h2>
    <div>
      <div class="content" v-show="chek3">
        <h3 >文档分类结果：</h3>
        <div id="myChart" :style="{width: '60%', height: '300px' ,float: 'left'}"></div>
        <div style="width: 40%;height: 300px;float: right">
          <el-table
            :data="tableData"
            border>
            <el-table-column
              prop="type"
              label="模型"
              width="180">
            </el-table-column>
            <el-table-column
              prop="weight"
              label="结果"
              width="180">
            </el-table-column>
          </el-table>
         </div>
      </div>
    </div>
    <div v-show="chek1">
      <div class="content">
        <h3>分句结果：</h3>
        {{content}}
      </div>
    </div>
    <div>
      <div class="content" v-show="chek">
        <h3>内容审核结果：</h3>
      </div>
    </div>
    <div v-show="chek" align="center" style="padding-top: 20px">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" stretch style="width: 80%">
        <el-tab-pane label="Cews二分类" name="first"><cews></cews></el-tab-pane>
        <el-tab-pane label="TextCNN分类" name="second"><textCNN></textCNN></el-tab-pane>
      </el-tabs>
    </div>
    <div v-html="message">
    </div>
  </div>
</template>

<script>
  import Cews from './Cews'
  import TextCNN from './TextCNN'
  export default {
    props:{
      selete:String
    },
    components:{
      'cews':Cews,
      'textCNN':TextCNN
    },
    name: 'hello',
    data () {
      return {
        activeName: 'first',
        message:'',
        content:'',
        msg: 'xxxx',
        radio:'',
        tableData: [{
          type:'SVM分类',
          weight:'0'
        }, {
          type:'CNN分类',
          weight:'0'
        }, {
          type:'RNN分类',
          weight:'0'
        }, {
          type:'NB分类',
          weight:'0'
        }, {
          type:'MAX Entropy分类',
          weight:'0'
        }],
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            data: ["时政","房产","科技","教育","游戏","家居","财经","娱乐","时尚","体育"]
          },
          yAxis: {},
          series: [{
            name: '权重:',
            type: 'bar',
            data: [0.73352, 0.16103, 0.02762, 0.02484, 0.01567, 0.01498, 0.01413, 0.00562, 0.00219, 0.0004]
          }]
        });
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    computed:{
      chek(){
        var path = this.$route.path;
        if(path == '/Test/ProperTest'){
          return true;
        }
        else return false;
      },
      chek1(){
        if(this.selete == '分句')
          return true
      },
      chek3(){
        var path = this.$route.path;
        if(path == '/Test/ProperTest'){
          return false;
        }
        else return true;
      }
    }
  }
</script>

<style>
 .content{
   margin-right: auto;
   margin-left: auto;
   width: 80%;
   height: 400px;
   overflow: hidden;
   border: black solid 1px;
   font-size: 18px;
 }
</style>
