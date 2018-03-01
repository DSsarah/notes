import Vue from 'vue' //导入vue.js核心文件
import Router from 'vue-router' //导入vue-router.js文件
import HelloWorld from '@/components/HelloWorld' //导入hello.vue组件
//导入user组件
import User from '@/components/User'
import left from '@/components/left/left'
import right from '@/components/right/right'
import center from '@/components/center/center'
Vue.use(Router) //在vue中使用router

export default new Router({
  //路由配置
  routes: [
    {
      path: '/', //根路径
      name: 'Hello',
      component: HelloWorld  //对应组件
    },
    {
      path:'/user',
      name:'User',
      component:User
    },
    {
      path:'./left',
      component:left
    },
    {
      path:'./right',
      component:right
    },
    {
      path:'center',
      component:center
    }
  ]
})
