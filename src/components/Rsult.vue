<template>
  <div>
    <h2 align="center">结果显示</h2>
    <div>
      <div v-show="chek">
        <p>文章：</p>
        <div class="content">
          {{content}}
        </div>
      </div>
      <div id="myChart" :style="{width: '60%', height: '600px' ,float: 'left'}"></div>
      <div style="width: 40%;height: 600px;float: right">
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
    <div v-show="chek" align="center" style="padding-top: 20px">
      <el-radio v-model="radio" label="1"  border>cews二分类</el-radio>
      <el-radio v-model="radio" label="2"  border>textCNN分类</el-radio>
    </div>
  </div>
</template>

<script>
  import Cews from './Cews'
  import TextCNN from './TextCNN'
  export default {
    components:{
      'cews':Cews,
      'textCNN':TextCNN
    },
    name: 'hello',
    data () {
      return {
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
          title: { text: '文档分类结果' },
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
      }
    },
    computed:{
      chek(){
        var path = this.$route.path;
        if(path == '/Test/ProperTest'){
          return true;
        }
        else return false;
      }
    }
  }
</script>

<style>
 .content{
   width: 100%;
   height: 300px;
   border: darkgray solid 1px;
   overflow: scroll;
   overflow-x:hidden;
   font-size: 18px
 }
</style>
