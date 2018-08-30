<template>
  <div style="margin-top: 300px">
    <h2 align="center">结果显示</h2>
    <div  class="space">
      <div class="content" v-show="chek3">
        <div class="contentkid">
        <h3>文档分类结果：</h3>
          <div id="myChart" class="chart"></div>
          <div class="table">
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
    </div>
    <div v-show="chek1">
      <div class="content">
        <div class="contentkid">
        <h3>分句检测结果：</h3>
          {{content}}
        </div>
      </div>
    </div>
    <div  class="space">
      <div class="content" v-show="chek2" >
        <div class="contentkid">
        <h3>文档检测结果：</h3>
        <div>
          <div id="meChart" class="chart"></div>
        </div>
          <div class="table">
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
    </div>
    <div v-show="chek"  class="space">
      <div class="content">
        <div class="contentkid">
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cnews二分类：</h3>
          <cnews></cnews>
        </div>
      </div>
    </div>
    <div v-show="chek" class="space">
      <div class="content">
        <div class="contentkid">
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textCNN分类：</h3>
          <textCNN></textCNN>
        </div>
      </div>
    </div>
    <div v-html="message">
    </div>
  </div>
</template>

<script>
  import Cnews from './Cnews'
  import TextCNN from './TextCNN'
  export default {
    props:{
      selete:String
    },
    components:{
      'cnews':Cnews,
      'textCNN':TextCNN
    },
    name: 'hello',
    data () {
      return {
        activeName: 'first',
        message:'',
        content:'高亮显示',
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
      this.drawLine1();
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
      drawLine1(){
        let meChart = this.$echarts.init(document.getElementById('meChart'));

        meChart.setOption({
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
      chek2(){
        if(this.selete == '文档')
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

<style lang="css">
 .content{
   margin-right: auto;
   margin-left: auto;
   width: 80%;
   height: 400px;
   overflow: hidden;
   border-radius: 15px;
   border: black solid 1px;
   font-size: 18px;
  }
 .contentkid{
   margin-right: auto;
   margin-left: auto;
   width: 95%;
   height: 80%;
 }
  .space{
    padding-top: 20px;padding-bottom: 30px
  }
  .chart{
    width: 800px;
    height: 300px;
    float: left;
  }
  .table{
    width: 40%;height: 250px;float: right
  }
</style>
