<template>
  <div>
    <div  class="space">
      <div class="content">
        <div class="contentchild">
          <h3>文档分类结果：</h3>
          <div id="myChart" class="chart"></div>
          <div class="table">
            <table border="1px" style="width: 100%">
              <tr>
                <th style="width: 50%">模型</th>
                <th style="width: 50%">结果</th>
              </tr>
              <tr>
                <td>SVM分类</td>
                <td>{{this.Basic_result.svm}}</td>
              </tr>
              <tr>
                <td>CNN分类</td>
                <td>{{this.Basic_result.cnn}}</td>
              </tr>
              <tr>
                <td>RNN分类</td>
                <td></td>
              </tr>
              <tr>
                <td>NB分类</td>
                <td>{{this.Basic_result.nb}}</td>
              </tr>
              <tr>
                <td>MAX Entropy分类</td>
                <td>{{this.Basic_result.maxEnt}}</td>
              </tr>
            </table>
          </div>
        </div>
        </div>
      </div>
    <div>
      <button @click="we">ni</button>
    </div>
  </div>
</template>

<script>
  import Cnews from './Cnews'
  import TextCNN from './TextCNN'
  export default {
    props:{
      Basic_result : Object,
    },
    components:{
      'cnews':Cnews,
      'textCNN':TextCNN
    },
    data () {
      return {
        activeName: 'first',
        content:'高亮显示',
        msg: 'xxxx',
        radio:'',
        tableData: [{
          type:'SVM分类',
          weight: this.Basic_result.svm,
        }, {
          type:'CNN分类',
          weight: this.Basic_result.cnn,
        }, {
          type:'RNN分类',
          weight: '',
        }, {
          type:'NB分类',
          weight: this.Basic_result.nb,
        }, {
          type:'MAX Entropy分类',
          weight: this.Basic_result.maxEnt,
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
      },
      we(){
        console.log(this.Basic_result);
      }
    },
    computed:{
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
   border: #dcdfe6 solid 1px;
   font-size: 18px;
  }
 .contentchild{
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
    width: 40%;height: 250px;float: right;
  }
  table{
    height: 250px;
    font-size: 16px;
    min-height: 25px;
    line-height: 25px;
    text-align: left;
    border-color: #dcdfe6;
    border-collapse: collapse;
    border-width: 0px 0 0 0px;
  }
</style>
