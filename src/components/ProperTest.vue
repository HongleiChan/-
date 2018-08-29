<template>
  <div >
    <p style="margin-bottom: 20px" align="center">
      <router-link :to="{name:'BasicTest'}"><el-radio v-model="radio" size="medium" label="1" border>基本分类</el-radio></router-link>
      <router-link :to="{name:'ProperTest'}"><el-radio v-model="radio" size="medium" label="2" border>专属分类</el-radio></router-link>
    </p>
    <el-form ref="form" :model="propertest_form" label-width="80px" :label-position="labelPosition" align="center">
      <el-form-item>
        <p>文档输入:</p>
        <el-input  type="textarea" :rows="6" placeholder="请输入内容" v-model="propertest_form.content" style="width: 500px"
        ></el-input>
      </el-form-item>
      <el-form-item>
        任务名称:
        <el-input type="text" v-model="propertest_form.name" style="width: 300px;padding-left: 0px" clearable></el-input>
      </el-form-item>
      <el-form-item>
        分类需求:
        <el-select v-model="propertest_form.demand" placeholder="" style="width: 300px;padding-left: 0px">
          <el-option label="涉黄" value="涉黄"></el-option>
          <el-option label="涉赌" value="涉毒"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item >
        分类选择:
        <el-select v-model="propertest_form.selete" placeholder="" style="width: 300px;padding-left: 0px">
          <el-option label="分句" value="分句"></el-option>
          <el-option label="整文" value="整文"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="type">
        模型选择:
        <el-checkbox-group v-model="propertest_form.moudle">
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
        radio:'2',
        labelPosition:'top',
        propertest_form: {
          content: '',
          name:'',
          demand:'',
          selete:'',
          moudle: []
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        this.$router.push('/Test/ProperTest/Rsult');
        location.reload();
      }
    },

  }
</script>

<style>

</style>

