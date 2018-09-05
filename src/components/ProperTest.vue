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
            <div class="testingchild" style="height: 40%">
              <h3>内容检测：</h3>
                <el-form-item >
                  检测粒度:
                  <el-select v-model="propertest_form.select" placeholder="" style="width: 300px;padding-left: 0px">
                    <el-option label="分句" value="分句"></el-option>
                    <el-option label="文档" value="文档"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="type">
                  检测模型:
                  <el-checkbox-group v-model="propertest_form.moudle">
                    <el-checkbox label="SVM分类" name="type"></el-checkbox>
                    <el-checkbox label="RNN分类" name="type"></el-checkbox><br>
                    <el-checkbox label="NB分类" name="type"></el-checkbox>
                    <el-checkbox label="MAX Entropy分类" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
            </div>
            <detection-result :select="propertest_form.select"></detection-result>
          </div>

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
          moudle:[]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        //location.reload();
        console.log(this.propertest_form)
      }
    }
  }
</script>

<style>
</style>

