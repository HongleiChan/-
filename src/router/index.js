import Vue from 'vue'
import Router from 'vue-router'
import Train from '@/components/Train'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/Train',
      name:'Train',
      component: Train
    }
  ]
})
