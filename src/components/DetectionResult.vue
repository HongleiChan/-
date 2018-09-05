<template>
  <div class="testingchild" style="height: 60%">
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
</template>

<script>
export default {
  props:{
    select:String,
    taxonomy_array : Array,
    content : String
  },
  data(){
    return{
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
  methods:{
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
    }
  },
  computed:{
    chek1(){
      if(this.select == 'sentence')
        return true
    },
    chek2(){
      if(this.select == 'content')
        return true
    }
  },
  watch:{
    taxonomy_array(val){
      console.log(val);
      this.taxonomy_array = val;
    },
    content(val){
      this.content = val;
    }
  }
}
</script>

<style>

</style>
