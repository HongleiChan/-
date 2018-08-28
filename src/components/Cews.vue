<template>
  <div align="center">
    <h2 align="center">结果显示</h2>
    <div align="center" style="padding-top: 20px">
      <router-link :to="{name:'Cews'}"><el-radio v-model="radio" label="1" border>cews二分类</el-radio></router-link>
      <router-link :to="{name:'TextCNN'}"><el-radio v-model="radio" label="2" border>textCNN分类</el-radio></router-link>
      <router-view></router-view>
    </div>
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
    <div style="margin-bottom: 0px">
      <router-link :to="{name:'ProperRsult'}">
        <el-button type="primary">返回</el-button>
      </router-link>
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
