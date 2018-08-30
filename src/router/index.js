import Vue from 'vue'
import Router from 'vue-router'
import Train from '@/components/Train'
import BasicTest from '@/components/BasicTest'
import ProperTest from '@/components/ProperTest'
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
      redirect: '/Test/BasicTest'
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
