import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/users/SignUp'
import Profile from '@/components/users/Profile'
import PostsIndex from '@/components/posts/Index.vue'
import PostsShow from '@/components/posts/Show.vue'
import PostsNew from '@/components/posts/New.vue'

Vue.use(Router)

// singleton pattern for ES6
// https://k94n.com/es6-modules-single-instance-pattern
// importing @/router/index.js will always return the same instance
export default new Router({
  routes: [
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/sign_in',
      name: 'Users.sign_in',
      component: SignIn
    },
    {
      path: '/profile',
      name: 'Users.profile',
      component: Profile
    },
    {
      path: '/sign_up',
      name: 'Users.sign_up',
      component: SignUp
    },
    {
      path: '/posts',
      name: 'Posts.index',
      component: PostsIndex
    },
    {
      path: '/posts/new',
      name: 'Posts.new',
      component: PostsNew
    },
    {
      path: '/posts/:id',
      name: 'Posts.show',
      component: PostsShow
    }
  ]
})
