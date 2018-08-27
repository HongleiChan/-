import Vue from 'vue'
import Router from 'vue-router'
import Train from '@/components/Train'
import Test from '@/components/Test'
import BasicTest from '@/components/BasicTest'
import ProperTest from '@/components/ProperTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/Test',
      name:'Test',
      component: Test
    },
    {
      path:'/Train',
      name:'Train',
      component: Train
    },
    {
      path:'/Test/BasicTest',
      name:'BasicTest',
      component: BasicTest
    },
    {
      path:'/Test/ProperTest',
      name:'ProperTest',
      component: ProperTest
    }
  ]
})
