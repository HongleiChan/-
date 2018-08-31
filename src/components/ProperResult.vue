<template>
  <div>
    <div  class="space">
      <div class="testing">
          <div class="testingchild" style="height: 40%">
            <h3>内容检测：</h3>
            <el-form>
              <el-form-item >
                检测力度:
                <el-select v-model="properresult_form.selete" placeholder="" style="width: 300px;padding-left: 0px">
                  <el-option label="分句" value="分句"></el-option>
                  <el-option label="文档" value="文档"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="type">
                检测模型:
                <el-checkbox-group v-model="properresult_form.moudle">
                  <el-checkbox label="SVM分类" name="type"></el-checkbox>
                  <el-checkbox label="CNN分类" name="type"></el-checkbox>
                  <el-checkbox label="RNN分类" name="type"></el-checkbox><br>
                  <el-checkbox label="NB分类" name="type"></el-checkbox>
                  <el-checkbox label="MAX Entropy分类" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </div>

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
      </div>
    </div>

    <div  class="space">
      <div class="content">
        <div class="contentchild">
          <h3>Cnews二分类：</h3>
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
        activeName: 'first',
        content:'高亮显示',
        msg: 'xxxx',
        radio:'',
        properresult_form:{
          selete: '',
          moudle: []
        },
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
      },
      onSubmit() {
        console.log('submit!');
        console.log(this.properresult_form);
      }
    },
    computed:{
      chek1(){
        if(this.properresult_form.selete == '分句')
          return true
      },
      chek2(){
        if(this.properresult_form.selete == '文档')
          return true
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
    border: black solid 1px;
    font-size: 18px;
    margin-top: 200px;
  }
  .testingchild{
    margin-right: auto;
    margin-left: auto;
    width: 95%;
  }
</style>
