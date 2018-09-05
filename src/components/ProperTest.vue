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
                    <el-checkbox label="textLSTM" name="type">RNN分类</el-checkbox><br>
                    <el-checkbox label="nb" name="type">NB分类</el-checkbox>
                    <el-checkbox label="maxEnt" name="type">MAX Entropy分类</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
            </div>
            <detection-result
              :select="propertest_form.select"
              :taxonomy_array=this.taxonomy_array
              :content="propertest_form.content">
            </detection-result>
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
  import DetectionResult from './DetectionResult'
  export default {
    components:{
      'proper-result':ProperResult,
      'detection-result':DetectionResult
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
        taxonomy_array:[]
      }
    },
    methods: {
      onSubmit() {
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
          //console.log(this.taxonomy_array)
        });
      }
    }
  }
</script>

<style>
</style>

