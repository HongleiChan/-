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

        <div class="space">
          <div class="inputcontent">
            <div class="contentkid">
                <h3>内容检测：</h3>
                <el-form-item >
                  检测力度:
                  <el-select v-model="propertest_form.selete" placeholder="" style="width: 300px;padding-left: 0px">
                    <el-option label="分句" value="分句"></el-option>
                    <el-option label="文档" value="文档"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="type">
                  检测模型:
                  <el-checkbox-group v-model="propertest_form.moudle">
                    <el-checkbox label="SVM分类" name="type"></el-checkbox>
                    <el-checkbox label="CNN分类" name="type"></el-checkbox>
                    <el-checkbox label="RNN分类" name="type"></el-checkbox><br>
                    <el-checkbox label="NB分类" name="type"></el-checkbox>
                    <el-checkbox label="MAX Entropy分类" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
            </div>
          </div>
        </div>

      </el-form>
    </div>

    <div>
      <proper-result :selete="propertest_form.selete"></proper-result>
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
          selete:'',
          moudle: []
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
  .input{
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  .inputcontent{
    width: 100%;height: 400px;border: black solid 1px; border-radius: 15px;margin-top: 200px;
  }
</style>

