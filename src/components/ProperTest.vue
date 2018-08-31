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
            <el-input  type="textarea" :rows="9" placeholder="请输入内容" v-model="propertest_form.content" style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <div>
      <proper-result ></proper-result>
    </div>

  </div>
</template>

<script type="text/javascript">
  import ProperResult from './ProperResult'

  export default {
    components:{
      'proper-result':ProperResult
    },
    data() {
      return {
        radio:'2',
        labelPosition:'top',
        propertest_form: {
          content: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        scroll(0,700);
        //location.reload();
        console.log(this.propertest_form)
      }
    }
  }
</script>

<style>
</style>

