<template>
  <div >
    <p style="margin-bottom: 20px" align="center">
      <router-link :to="{name:'BasicTest'}"><el-radio v-model="radio" size="medium" label="1" border>基本分类</el-radio></router-link>
      <router-link :to="{name:'ProperTest'}"><el-radio v-model="radio" size="medium" label="2" border>专属分类</el-radio></router-link>
    </p>

    <div align="center">
      <el-form ref="form" :model="basictest_form" label-width="80px" :label-position="labelPosition" >
        <el-form-item>
          <p>文档输入:</p>
          <el-input  type="textarea" :rows="9" placeholder="请输入内容" v-model="basictest_form.content" style="width: 60% "
          ></el-input>
        </el-form-item>
        <el-form-item>
          任务名称:
          <el-input type="text" v-model="basictest_form.name" style="width: 300px;padding-left: 0px" clearable></el-input>
        </el-form-item>
        <el-form-item prop="type">
          模型选择:
          <el-checkbox-group v-model="basictest_form.moudle">
            <el-checkbox label="svm" name="type" >SVM分类</el-checkbox>
            <el-checkbox label="textCNN" name="type">CNN分类</el-checkbox>
            <el-checkbox label="textLSTM" name="type">RNN分类</el-checkbox><br>
            <el-checkbox label="nb" name="type">NB分类</el-checkbox>
            <el-checkbox label="maxEnt" name="maxEnt">MAX Entropy分类</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div id="BasicResult">
      <basic-result :Basic_result=this.Basic_result ref="basicresult" ></basic-result>
    </div>

  </div>
</template>

<script type="text/javascript">
  import BasicResult from './BasicResult'
  export default {
    components:{
      'basic-result':BasicResult
    },
    data() {
      return {
        radio:'1',
        labelPosition:'top',
        basictest_form: {
          content: '',
          name:'',
          moudle: []
        },
        Basic_result:{
        },
        Basic_text:{}
      }
    },
    methods: {
      onSubmit() {
        //选择模型分类结果
        this.$axios.interceptors.request.use((config)=>{
          return config;
        });
        this.$axios.interceptors.response.use((res)=>{
          return res;
        });
        const url = "http://118.118.118.28:9046/model/classifier/choice/accessToken";
        var data = {
          "taskId": this.basictest_form.name,
          "content": this.basictest_form.content,
          "moduler": this.basictest_form.moudle
        };
        var q1 =this.$axios.post(url,data,).then((res)=>{
          this.Basic_result = res.data.data;
          //console.log(res);
        });

        // const url1 = "http://118.118.118.28:9046/model/classifier/proper/increase_textcnn/accessToken";
        // var data1 = {
        //   "taskId": this.basictest_form.name,
        //   "title": "",
        //   "content": this.basictest_form.content
        // };
        // var q2 = this.$axios.post(url1,data1).then((res)=>{
        //   this.Basic_text = res.data.data;
        //  // console.log(this.Basic_text);
        //   //console.log(res.data.data)
        // });
      }
    }
  }
</script>

<style>

</style>
