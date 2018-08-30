<template>
  <div>
    <div  class="space">
      <div>
        <div class="content">
          <div class="contentkid">
            <h3>内容检测结果：</h3>
            <div v-show="chek1">
              {{content}}
            </div>

            <div v-show="chek2">
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
      </div>
    </div>

    <div  class="space">
      <div class="content">
        <div class="contentkid">
          <h3>Cnews二分类：</h3>
          <cnews></cnews>
        </div>
      </div>
    </div>

    <div class="space">
      <div class="content">
        <div class="contentkid">
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
    },
    methods: {
      drawLine(){
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
      chek1(){
        if(this.selete == '分句')
          return true
      },
      chek2(){
        if(this.selete == '文档')
          return true
      }
    }
  }
</script>

<style lang="css">

</style>
