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
  </div>
</template>

<script>
  import Cnews from './Cnews'
  import TextCNN from './TextCNN'
  export default {
    props:{
      Basic_result: {type:Object,required: true},
    },
    components:{
      'cnews':Cnews,
      'textCNN':TextCNN
    },
    data () {
      return {
        chartdata:[],
        chartdatax:[],
        basic_result:this.Basic_result
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        this.$axios.interceptors.request.use((config)=>{
          this.Content = this.content;
          return config;
        });
        this.$axios.interceptors.response.use((res)=>{
          return res;
        });
        //console.log(this.Basic_text);
        // 基于准备好的dom，初始化echarts实例\
        let temp = this.basic_result;
        //console.log(this.basic_result);
        for(let item in temp){
          this.chartdatax.push(item);
          this.chartdata.push(temp[item]);
        }

        //console.log(this.chartdata);
        let temp1 = this.chartdata;
        for(let item1 in temp1){
          switch (temp1[item1]) {
            case '时政' : this.chartdata[item1] = 1; break;
            case '房产' : this.chartdata[item1] = 2; break;
            case '科技' : this.chartdata[item1] = 3; break;
            case '教育' : this.chartdata[item1] = 4; break;
            case '游戏' : this.chartdata[item1] = 5; break;
            case '家居' : this.chartdata[item1] = 6; break;
            case '财经' : this.chartdata[item1] = 7; break;
            case '娱乐' : this.chartdata[item1] = 8; break;
            case '时尚' : this.chartdata[item1] = 9; break;
            case '体育' : this.chartdata[item1] = 10; break;
          }
        }
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        myChart.showLoading();
        myChart.setOption({
          title:{
          },
          tooltip: {

          },
          xAxis: {
            axisLabel:{
              formatter: function (value) {
                var texts = [];
                if(value == 1){
                  texts.push('时政');
                }
                else if (value == 2) {
                  texts.push('房产');
                }
                else if (value == 3) {
                  texts.push('科技');
                }
                else if(value == 4){
                  texts.push('教育');
                }
                else if(value == 5){
                  texts.push('游戏');
                }
                else if(value == 6){
                  texts.push('家居');
                }
                else if(value == 7){
                  texts.push('财经');
                }
                else if(value == 8){
                  texts.push('娱乐');
                }
                else if(value == 9){
                  texts.push('时尚');
                }
                else if(value == 10){
                  texts.push('体育');
                }
                return texts;

              }
            }
          },
          yAxis: {
            data: this.chartdatax
          },
          series: [{
            name: '分类结果:',
            type: 'bar',
            data:  this.chartdata,
          }]
        });
        myChart.hideLoading();
        this.chartdata = [];
        this.chartdatax = [];
      },
    },
    computed:{
    },
    watch: {
      Basic_result(val){
        //console.log(val);
        this.basic_result = val;
        this.drawLine();
      },
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
