<template>
  <div align="center">
    <div>
      <div>
        <el-table
          :data="tableData"
          border>
          <el-table-column
            prop="type"
            label="模型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="weight"
            label="结果"
            width="180">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'xxxx',
        radio:'1',

        tableData: [{
          type:'SVM分类',
          weight:'0'
        }, {
          type:'CNN分类',
          weight:'0'
        }, {
          type:'RNN分类',
          weight:'0'
        }, {
          type:'NB分类',
          weight:'0'
        }, {
          type:'MAX Entropy分类',
          weight:'0'
        }],
      }
    }
  }
</script>

<style>

</style>
