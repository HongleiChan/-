<template>
  <div align="center">
    <p style="margin-bottom: 20px">
      <router-link :to="{name:'BasicTest'}"><el-button size="medium">基本分类</el-button></router-link>
      <router-link :to="{name:'ProperTest'}"><el-button size="medium" >专属分类</el-button></router-link>
    </p>
    <el-form ref="form" :model="basictest_form" label-width="80px" :label-position="labelPosition">
      <el-form-item label="文档输入:"  >
        <el-input  type="textarea" :rows="6" placeholder="请输入内容" v-model="basictest_form.content" style="width: 500px"
        ></el-input>
      </el-form-item>
      <el-form-item label="任务名称:"  >
        <el-input type="text" v-model="basictest_form.name" style="width: 300px;padding-left: 0px" clearable></el-input>
      </el-form-item>
      <el-form-item label="模型选择:" prop="type">
        <el-checkbox-group v-model="basictest_form.moudle">
          <el-checkbox label="SVM分类" name="type"></el-checkbox>
          <el-checkbox label="SVM分句" name="type"></el-checkbox>
          <el-checkbox label="CNN分类" name="type"></el-checkbox><br/>
          <el-checkbox label="RNN分类" name="type"></el-checkbox>
          <el-checkbox label="NB分类" name="type"></el-checkbox>
          <el-checkbox label="MAX Entropy分类" name="type"></el-checkbox>
        </el-checkbox-group>
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
        basictest_form: {
          content: '',
          name:'',
          moudle: []
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
