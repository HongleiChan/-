<template>
  <div align="center" style="padding-top: 20px">
      <div>
        <table border="1px" style="width: 40%;float: left" class="table">
          <tr>
            <th style="width: 50%">模型</th>
            <th style="width: 50%">结果</th>
          </tr>
          <tr>
            <td>体育</td>
            <td>{{this.proper_cnews.体育}}</td>
          </tr>
          <tr>
            <td>娱乐</td>
            <td>{{this.proper_cnews.娱乐}}</td>
          </tr>
          <tr>
            <td>家居</td>
            <td>{{this.proper_cnews.家居}}</td>
          </tr>
          <tr>
            <td>房产</td>
            <td>{{this.proper_cnews.房产}}</td>
          </tr>
          <tr>
            <td>科技</td>
            <td>{{this.proper_cnews.科技}}</td>
          </tr>
        </table>
        <table border="1px" style="width: 40%; float: right" class="table">
          <tr>
            <th style="width: 50%">模型</th>
            <th style="width: 50%">结果</th>
          </tr>
          <tr>
            <td>教育</td>
            <td>{{this.proper_cnews.教育}}</td>
          </tr>
          <tr>
            <td>时尚</td>
            <td>{{this.proper_cnews.时尚}}</td>
          </tr>
          <tr>
            <td>时政</td>
            <td>{{this.proper_cnews.时政}}</td>
          </tr>
          <tr>
            <td>游戏</td>
            <td>{{this.proper_cnews.游戏}}</td>
          </tr>
          <tr>
            <td>财经</td>
            <td>{{this.proper_cnews.财经}}</td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
  export default {
    props:{
      proper_cnews : Object
    },
    name: 'hello',
    data () {
      return {
      }
    },
    watch:{
      proper_cnews(val){
        //console.log(val);
        this.proper_cnews = val;
      }
    }
  }
</script>

<style>

</style>
