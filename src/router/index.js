import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// import CadModel from '@/components/cadModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/CADModel',
      name: 'CADModel',
      component: Index
    },
    {
      path: '/CAEModel',
      name: 'CAEModel',
      component: Index
    },
    {
      path: '/forwordHandle',
      name: 'forwordHandle',
      component: Index
    }
  ]
})
