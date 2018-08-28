import Vue from 'vue'
import Router from 'vue-router'
import Train from '@/components/Train'
import Test from '@/components/Test'
import BasicTest from '@/components/BasicTest'
import ProperTest from '@/components/ProperTest'
import Rsult from  '@/components/Rsult'
import Cews from '@/components/Cews'
import TextCNN from '@/components/TextCNN'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/Train'
    },
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
    },
    {
      path:'/Test/ProperTest/Rsult',
      name:'ProperRsult',
      component: Rsult
    },
    {
      path:'/Test/BasicTest/Rsult',
      name:'BasicRsult',
      component: Rsult
    },
    {
      path:'/Test/ProperTest/cews',
      name:'Cews',
      component: Cews
    },
    {
      path:'/Test/ProperTest/TextCNN',
      name:'TextCNN',
      component: TextCNN
    }
  ]
})
