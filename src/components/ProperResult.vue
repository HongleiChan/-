<template>
  <div>
    <div  class="space">
      <div class="content">
        <div class="contentchild">
          <div style="width: 20%">
            <h3 style="float: left">Cnews二分类：</h3>
            <el-button type="primary" @click="onCheck" style="margin-top: 20px" size="small">提交</el-button>
          </div>
          <div style="margin-top: 50px; width: 80%">
            <cnews :proper_cnews = this.proper_cnews ></cnews>
          </div>
        </div>
      </div>
    </div>

    <div class="space">
      <div class="content">
        <div class="contentchild">
          <h3>textCNN分类：</h3>
          <textCNN :proper_content = this.proper_content></textCNN>
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
      proper_content:String
    },
    components:{
      'cnews':Cnews,
      'textCNN':TextCNN
    },
    name: 'hello',
    data () {
      return {
        proper_cnews:{}
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onCheck(){
        if(this.proper_content == ''){
          alert('文档输入为空，请重试')
          return;
        }
        //cnews分类结果请求
        this.$axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
          var config = err.config;
          // If config does not exist or the retry option is not set, reject
          if (!config || !config.retry) return Promise.reject(err);

          // Set the variable for keeping track of the retry count
          config.__retryCount = config.__retryCount || 0;

          // Check if we've maxed out the total number of retries
          if (config.__retryCount >= config.retry) {
            // Reject with the error
            return Promise.reject(err);
          }

          // Increase the retry count
          config.__retryCount += 1;

          // Create new promise to handle exponential backoff
          var backoff = new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
            }, config.retryDelay || 1);
          });

          // Return the promise in which recalls axios to retry the request
          return backoff.then(function () {
            return axios(config);
          });
        });

        const url = "http://118.118.118.28:9046/model/classifier/proper/cNews_dichotomy/accessToken";
        var params = {
          "taskId": "",
          "title": "",
          "content": this.proper_content
        };
        this.$axios.post(url,params).then((res)=>{
          //console.log(res.data.data)
          this.proper_cnews = res.data.data;
        });
      }
    },
    watch:{
      proper_content(val){
        //console.log(this.proper_content);
        this.proper_content = val;
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
    border: #dcdfe6 solid 1px;
    font-size: 18px;
    margin-top: 50px;
  }
  .testingchild{
    margin-right: auto;
    margin-left: auto;
    width: 95%;
  }
</style>
