import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import resume from '@/views/resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/personblog/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
