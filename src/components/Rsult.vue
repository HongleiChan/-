<template>
  <div>
    <h2 align="center">结果显示</h2>
    <div>
      <div id="myChart" :style="{width: '60%', height: '600px' ,float: 'left'}"></div>
      <div style="width: 40%;height: 600px;float: right">
        <el-table
          :data="tableData"
          border>
          <el-table-column
            prop="type"
            label="类别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="weight"
            label="权重"
            width="180">
          </el-table-column>
        </el-table>
       </div>
    </div>
    <div style="margin-bottom: 0px" align="center">
      <router-link :to="{name:'BasicTest'}">
      <el-button type="primary">返回</el-button>
      </router-link>
    </div>
    <div v-show="chek" align="center" style="padding-top: 20px">
      <router-link :to="{name:'Cews'}"><el-radio v-model="radio" label="1" border>cews二分类</el-radio></router-link>
      <router-link :to="{name:'TextCNN'}"><el-radio v-model="radio" label="2" border>textCNN分类</el-radio></router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'xxxx',
        radio:'',
        tableData: [{
          type:'时政',
          weight:'0.73352'
        }, {
          type:'房产',
          weight:'0.16103'
        }, {
          type:'科技',
          weight:'0.02762'
        }, {
          type:'教育',
          weight:'0.02484'
        }, {
          type:'游戏',
          weight:'0.01567'
        }, {
          type:'家居',
          weight:'0.01498'
        }, {
          type:'财经',
          weight:'0.01413'
        }, {
          type:'娱乐',
          weight:'0.00562'
        }, {
          type:'时尚',
          weight:'0.00219'
        }, {
          type:'体育',
          weight:'0.0004'
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
        if(path == '/Test/ProperTest/Rsult'){
          return true;
        }
        else return false;
      }
    }
  }
</script>

<style>
 
</style>
