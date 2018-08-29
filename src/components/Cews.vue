<template>
  <div align="center">
    <div>
      <div style="width: 100%;height: 600px;float: right">
        <el-table
          :data="tableData"
          border>
          <el-table-column
            prop="type"
            label="类别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="weight"
            label="权重"
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
          type:'时政',
          weight:'0.73352'
        }, {
          type:'房产',
          weight:'0.16103'
        }, {
          type:'科技',
          weight:'0.02762'
        }, {
          type:'教育',
          weight:'0.02484'
        }, {
          type:'游戏',
          weight:'0.01567'
        }, {
          type:'家居',
          weight:'0.01498'
        }, {
          type:'财经',
          weight:'0.01413'
        }, {
          type:'娱乐',
          weight:'0.00562'
        }, {
          type:'时尚',
          weight:'0.00219'
        }, {
          type:'体育',
          weight:'0.0004'
        }],
      }
    }
  }
</script>

<style>

</style>
