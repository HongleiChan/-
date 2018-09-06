<template>
  <div>

    <div>

      <div style="width: 50%;border: black;float: left">
        AI平台textCNN:
        <el-button type="primary" size="small" @click="checktext">点击获取</el-button>
      </div>


      <div style="width: 50%;border: black;float: right ">
        增加数据集后textCNN:
        <el-button type="primary" size="small" @click="checktext1">点击获取</el-button>
      </div>

      <div class="res" style="float: left;">
        <div id="textChart" style="height: 300px;width: 600px"></div>
      </div>
      <div class="res" style="float: right">
        <div id="textChart1" style="height: 300px;width: 600px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    proper_content:String
  },
  data(){
    return{
      proper_textcnn:{},
      proper_textcnn1:{},
      chartdata1:[],
      chartdata1x:[],
      chartdata2x:[],
      chartdata2:[]
    }
  },
  mounted(){
    this.drawtextLine();
    this.drawtextLine1();
  },
  methods:{
    drawtextLine(){
      let temp = this.proper_textcnn;
      //console.log(this.basic_result);
      for(let item in temp){
        this.chartdata1x.push(item);
        this.chartdata1.push(temp[item]);
      };
      //console.log(this.chartdata1x);
      //console.log(this.chartdata1);
      let textChart = this.$echarts.init(document.getElementById('textChart'));
      textChart.setOption({
        tooltip: {},
        xAxis: {
          data: this.chartdata1x
        },
        yAxis: {},
        series: [{
          name: '权重:',
          type: 'bar',
          data: this.chartdata1
        }]
      });
      this.chartdata1 = [];
      this.chartdata1x = [];
    },

    drawtextLine1(){
      let temp = this.proper_textcnn1;
      //console.log(this.basic_result);
      for(let item in temp){
        this.chartdata2x.push(item);
        this.chartdata2.push(temp[item]);
      };
      let textChart1 = this.$echarts.init(document.getElementById('textChart1'));
      textChart1.setOption({
        tooltip: {},
        xAxis: {
          data: this.chartdata2x
        },
        yAxis: {},
        series: [{
          name: '权重:',
          type: 'bar',
          data: this.chartdata2
        }]
      });
      this.chartdata2 = [];
      this.chartdata2x = [];
    },


    checktext(){
      if(this.proper_content == ''){
        alert('文档输入为空，请重试')
        return;
      }
      //原平台textcnn
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
      const url = "http://118.118.118.28:9046/model/classifier/proper/textcnn/accessToken";
      var params = {
        "taskId": "",
        "title": "",
        "content": this.proper_content
      };
      this.$axios.post(url,params).then((res)=>{
        //console.log(res.data.data)
        this.proper_textcnn = res.data.data;
        //console.log(this.proper_textcnn)
        this.drawtextLine();
      });
    },


    checktext1(){
      if(this.proper_content == ''){
        alert('文档输入为空，请重试')
        return;
      }
      //增加数据集textcnn
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
      const url = "http://118.118.118.28:9046/model/classifier/proper/increase_textcnn/accessToken";
      var params = {
        "taskId": "",
        "title": "",
        "content": this.proper_content
      };
      this.$axios.post(url,params).then((res)=>{
        //console.log(res.data.data)
        this.proper_textcnn1 = res.data.data;
        //console.log(this.proper_textcnn1);
        this.drawtextLine1();
      });
    }
  },
  watch:{
    proper_content(val){
      //console.log(val);
      this.proper_content = val;
    }
  }
}
</script>

<style lang="css">
 .res{
   width: 49%;
   height: 270px;
   overflow: scroll;
   overflow-x: hidden;
   border:1px solid #dcdfe6;
 }
</style>
