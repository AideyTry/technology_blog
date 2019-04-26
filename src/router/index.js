import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/pages/blog'
import Article from '@/pages/blog/article'
import ArticleDetail from '@/pages/blog/article-detail'
import About from '@/pages/blog/about'
import Projects from '@/pages/blog/projects'
import Tools from '@/pages/blog/tools'
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
      path: '/',
      name: 'blog',
      component: Blog,
      redirect: {name: 'article'},
      children: [
        {
          path: '/',
          name: 'article',
          component: Article
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/projects',
          name: 'projects',
          component: Projects
        },
        {
          path: '/tools',
          name: 'tools',
          component: Tools
        }
      ]
    },
    {
      path: '/writing',
      name: 'writing',
      component: Writing
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      component: ArticleDetail
    }
  ]
})
