<template>
  <div>
    <p style="margin-bottom: 20px" align="center">
      <router-link :to="{name:'BasicTest'}"><el-radio v-model="radio" size="medium" label="1" border>基本分类</el-radio></router-link>
      <router-link :to="{name:'ProperTest'}"><el-radio v-model="radio" size="medium" label="2" border>专属分类</el-radio></router-link>
    </p>

    <div class="input">
      <el-form ref="form" :model="propertest_form" label-width="80px" :label-position="labelPosition" >
        <div align="center">
          <el-form-item>
            <p>文档输入:</p>
            <el-input  type="textarea" :rows="9" placeholder="请输入内容" v-model="propertest_form.content" style="width: 60%"
            ></el-input>
          </el-form-item>
        </div>
        <div  class="space">
          <div class="testing">
            <div class="testingchild" style="height: 45%">
              <h3>内容检测：</h3>
                <el-form-item >
                  检测粒度:
                  <el-select v-model="propertest_form.select" placeholder="" style="width: 300px;padding-left: 0px">
                    <el-option label="分句" value="sentence"></el-option>
                    <el-option label="文档" value="content"></el-option>
                  </el-select>
                </el-form-item>
              <el-form-item >
                检测种类:
                <el-select v-model="propertest_form.variety" placeholder="" style="width: 300px;padding-left: 0px">
                  <el-option label="涉黄" value="porn"></el-option>
                  <el-option label="涉赌" value="gamble"></el-option>
                </el-select>
              </el-form-item>
                <el-form-item prop="type">
                  检测模型:
                  <el-checkbox-group v-model="propertest_form.moudle">
                    <el-checkbox label="svm" name="type">SVM分类</el-checkbox>
                    <el-checkbox label="textLSTM" name="type">RNN分类</el-checkbox>
                    <el-checkbox label="vocab" name="type">vocab词表</el-checkbox><br>
                    <el-checkbox label="nb" name="type">NB分类</el-checkbox>
                    <el-checkbox label="maxEnt" name="type">MAX Entropy分类</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
            </div>

            <div class="testingchild" style="height: 60%">
              <h3>内容检测结果：</h3>
              <div v-show="chek1">
                <div class="taxonomy_text" v-html="taxonomy_text"></div>
                <div class="tips">
                  <h3 align="center">涉嫌指数</h3>
                  <div class="colorbox" style="background-color:#FFCC00 "></div>
                  <span style="margin-top: 50px;margin-left: 30px;font-size: 15px;color:#FFCC00">0-0.3&nbsp&nbsp&nbsp轻度涉嫌</span>
                  <div class="colorbox" style="background-color:#FF9900 "></div>
                  <span style="margin-top: 50px;margin-left: 30px;font-size: 15px;color:#FF9900">0.3-0.6&nbsp&nbsp&nbsp中度涉嫌</span>
                  <div class="colorbox" style="background-color:#FF0000 "></div>
                  <span style="margin-top: 50px;margin-left: 30px;font-size: 15px;color:#FF0000">0.6-1.0&nbsp&nbsp&nbsp重度涉嫌</span>
                </div>
              </div>
              <div v-show="chek2">
                <div>
                  <div id="meChart" class="chart"></div>
                </div>
                <div class="table">
                  <table border="1px" style="width: 100%">
                    <tr>
                      <th style="width: 50%">模型</th>
                      <th style="width: 50%">结果</th>
                    </tr>
                    <tr>
                      <td>SVM分类</td>
                      <td>{{this.proper_result.svm}}</td>
                    </tr>
                    <tr>
                      <td>CNN分类</td>
                      <td>{{this.proper_result.cnn}}</td>
                    </tr>
                    <tr>
                      <td>RNN分类</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>NB分类</td>
                      <td>{{this.proper_result.nb}}</td>
                    </tr>
                    <tr>
                      <td>MAX Entropy分类</td>
                      <td>{{this.proper_result.maxEnt}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </el-form>
    </div>
    <div>
      <proper-result :proper_content="propertest_form.content"></proper-result>
    </div>

  </div>
</template>

<script type="text/javascript">
  import ProperResult from './ProperResult'
  export default {
    components:{
      'proper-result':ProperResult,
    },
    data() {
      return {
        radio:'2',
        labelPosition:'top',
        propertest_form: {
          content: '',
          select: '',
          moudle:[],
          variety:''
        },
        taxonomy_array:[],
        taxonomy_text:'',
        proper_result:{},
        properchartdata:[],
        properchartdatax:[]
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        let temp = this.proper_result;
        //console.log(this.basic_result);
        for(let item in temp){
          this.properchartdatax.push(item);
          this.properchartdata.push(temp[item]);
        }

        //console.log(this.chartdata);
        let temp1 = this.properchartdata;
        for(let item1 in temp1){
          switch (temp1[item1]) {
            case '时政' : this.properchartdata[item1] = 1; break;
            case '房产' : this.properchartdata[item1] = 2; break;
            case '科技' : this.properchartdata[item1] = 3; break;
            case '教育' : this.properchartdata[item1] = 4; break;
            case '游戏' : this.properchartdata[item1] = 5; break;
            case '家居' : this.properchartdata[item1] = 6; break;
            case '财经' : this.properchartdata[item1] = 7; break;
            case '娱乐' : this.properchartdata[item1] = 8; break;
            case '时尚' : this.properchartdata[item1] = 9; break;
            case '体育' : this.properchartdata[item1] = 10; break;
          }
        }
        let meChart = this.$echarts.init(document.getElementById('meChart'));
        meChart.showLoading();
        meChart.setOption({
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
            data: this.properchartdatax
          },
          series: [{
            name: '分类结果:',
            type: 'bar',
            data:  this.properchartdata,
          }]
        });
        meChart.hideLoading();
        this.properchartdata = [];
        this.properchartdatax = [];
      },

      onSubmit() {
        if(this.propertest_form.content == ''){
          alert('文档输入为空，请重试')
          return;
        }else if(this.propertest_form.select == ''){
          alert('检测粒度不能为空，请重试')
          return;
        }
        else if(this.propertest_form.variety == ''){
          alert('检测种类不能为空，请重试')
          return;
        }
        else if(this.propertest_form.moudle == ''){
          alert('检测模型不能为空，请重试')
          return;
        }
        // console.log('submit!');
        // //location.reload();
        // /console.log(this.propertest_form);

        this.$axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
          var config = err.config;
          // If config does not exist or the retry option is not set, reject
          if(!config || !config.retry) return Promise.reject(err);

          // Set the variable for keeping track of the retry count
          config.__retryCount = config.__retryCount || 0;

          // Check if we've maxed out the total number of retries
          if(config.__retryCount >= config.retry) {
            // Reject with the error
            return Promise.reject(err);
          }

          // Increase the retry count
          config.__retryCount += 1;

          // Create new promise to handle exponential backoff
          var backoff = new Promise(function(resolve) {
            setTimeout(function() {
              resolve();
            }, config.retryDelay || 1);
          });

          // Return the promise in which recalls axios to retry the request
          return backoff.then(function() {
            return axios(config);
          });
        });

        if(this.propertest_form.select == 'sentence'){
          const url = "http://118.118.118.28:9046/model/classifier/proper/porn_gamble/accessToken";
          var params = {
            "taskId": "",
            "title": "",
            "content": this.propertest_form.content,
            "variety": this.propertest_form.variety,
            "models": this.propertest_form.moudle,
            "tag": this.propertest_form.select
          };
          this.$axios.post(url,params).then((res)=>{
            this.taxonomy_array = res.data.data;
            console.log(this.taxonomy_array);
            this.taxonomy();
          });
        }
        //文档
        else if(this.propertest_form.select == 'content'){
          const url = "http://118.118.118.28:9046/model/classifier/choice/accessToken";
          var data = {
            "taskId": '20180718',
            "content": this.propertest_form.content,
            "moduler": this.propertest_form.moudle
          };
          var q1 =this.$axios.post(url,data).then((res)=>{
            this.proper_result = res.data.data;
            this.drawLine();
            //console.log(res);
          });
        }
      },

      taxonomy(){
        //console.log(this.taxonomy_array);
        this.taxonomy_text = this.propertest_form.content;
        if(this.taxonomy_array){
          var taxonomy_data = this.taxonomy_array;
          for(var n=0;n<this.taxonomy_array.length;n++){
            taxonomy_data[n].from = Number(this.taxonomy_array[n].from);
            taxonomy_data[n].score = Number(this.taxonomy_array[n].score);
            taxonomy_data[n].to = Number(this.taxonomy_array[n].to);
          }
          taxonomy_data.sort();
          //最终处理后的
          var taxonosubcurent = '';
          for (var h=taxonomy_data.length-1;h>=0;h--){
            //已加标签
            var taxonomycurrent = '';
            //待加标签
            var taxonomymain = this.taxonomy_text.substring(taxonomy_data[h].from,taxonomy_data[h].to);
            console.log(taxonomymain);
            if(taxonomy_data[h].score<0.3){
              taxonomycurrent = '<span style="color : #FFCC00;">' + taxonomymain + '</span>'
            }else if(taxonomy_data[h].score>=0.3 && taxonomy_data<=0.6){
              taxonomycurrent = '<span style="color : #FF9900;">' + taxonomymain + '</span>'
            }else if(taxonomy_data[h].score>0.6){
              taxonomycurrent = '<span style="color : #FF0000;">' + taxonomymain + '</span>'
            }
            taxonosubcurent = taxonomycurrent + taxonosubcurent ;
          }
          this.taxonomy_text = taxonosubcurent
        }
      }
    },
    computed:{
      chek1(){
        if(this.propertest_form.select == 'sentence')
          return true
      },
      chek2(){
        if(this.propertest_form.select == 'content')
          return true
      }
    },
  }
</script>

<style>
  .taxonomy_text{
    width: 70%;height: 300px;border: #dcdfe6 solid 1px; overflow: scroll;overflow-x: hidden;float: left;
  }
  .tips{
    width: 25%;height: 300px;border: #dcdfe6 solid 1px;float: right;border-radius: 15px;
  }
  .colorbox{
    width: 15%;height: 5%;border: #dcdfe6 solid 1px;border-radius: 8px; margin-top: 30px;margin-left: 30px;
  }
</style>

