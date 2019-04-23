import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/pages/blog'
import Writing from '@/pages/writing'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'blog'}
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/writing',
      name: 'writing',
      component: Writing
    }
  ]
})
