import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Main from '@/components/Main'
import AddArticle from '@/components/AddArticle'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/main',
      name: 'Main',
      component: Main
    },
    {
      path:'/add-article',
      name: 'AddArticle',
      component: AddArticle
    },
    {
      path:'/edit/:articleId',
      name: 'Edit',
      component: Edit
    }
  ]
})
