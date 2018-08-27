<template>
  <div align="center">
    <el-form ref="form" :model="trian_form" label-width="100px" :label-position="labelPosition">
      <el-form-item label="模型选择:">
        <el-select v-model="trian_form.region" placeholder="">
          <el-option label="SVM分类" value="SVM分类"></el-option>
          <el-option label="SVM分句" value="SVM分句"></el-option>
          <el-option label="CNN分类" value="CNN分类"></el-option>
          <el-option label="RNN分类" value="RNN分类"></el-option>
          <el-option label="NB分类" value="NB分类"></el-option>
          <el-option label="MAX Entropy分类" value="MAX Entropy分类"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="模型任务名称:"  >
        <el-input type="text" v-model="trian_form.name" style="width: 300px;padding-left: 0px" clearable></el-input>
      </el-form-item>
      <el-form-item label="训练模型地址:"  >
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
        console.log('submit!');
      }
    }
  }
</script>

<style>

</style>
