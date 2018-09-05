<template>
  <div align="center">
    <el-form ref="form" :model="trian_form" label-width="100px" :label-position="labelPosition">
      <el-form-item >
        模型选择:
        <el-select v-model="trian_form.region" placeholder="" style="width: 270px;padding-left: 0px">
          <el-option label="SVM分类" value="SVM分类"></el-option>
          <el-option label="CNN分类" value="CNN分类"></el-option>
          <el-option label="RNN分类" value="RNN分类"></el-option>
          <el-option label="NB分类" value="NB分类"></el-option>
          <el-option label="MAX Entropy分类" value="MAX Entropy分类"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        模型任务名称:
        <el-input type="text" v-model="trian_form.name" style="width: 300px;padding-left: 0px" clearable></el-input>
      </el-form-item>
      <el-form-item>
        训练模型地址:
        <el-input type="text" v-model="trian_form.location" style="width: 300px;padding-left: 0px" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition:'top',
        trian_form: {
          region: '',
          name:'',
          location:''
        }
      }
    },
    methods: {
      onSubmit() {
        if(this.trian_form.region == ''){
          alert('模型选择不能为空');
          return;
        }else if(this.trian_form.name == ''){
          alert('模型任务名称不能为空');
          return;
        }else if(this.trian_form.location == ''){
          alert('训练模型地址不能为空');
          return;
        }

        if(this.trian_form.region == 'MAX Entropy分类'){
          const url = "http://118.118.118.28:9046/model/classifier/maxent/accessToken";
          var params = {
            "taskId": this.trian_form.name,
            "trainDataPath": this.trian_form.location
          };
          this.$axios.post(url,params).then((res)=>{
            console.log(res)
          });
          return;
        }else if(this.trian_form.region == 'NB分类'){
          const url = "http://118.118.118.28:9046/model/classifier/nb/accessToken";
          var params = {
            "taskId": this.trian_form.name,
            "trainDataPath": this.trian_form.location
          };
          this.$axios.post(url,params).then((res)=>{
            console.log(res)
          });
          return;
        }else if(this.trian_form.region == 'SVM分类'){
          const url = "http://118.118.118.28:9046/model/classifier/svm/accessToken";
          var params = {
            "taskId": this.trian_form.name,
            "trainDataPath": this.trian_form.location
          };
          this.$axios.post(url,params).then((res)=>{
            console.log(res)
          });
          return;
        }
      }
    }
  }
</script>

<style>

</style>
