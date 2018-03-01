// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //导入vue核心，相当于js的script导入
import App from './App' //导入自定义的App.vue文件
import router from './router' //导入路由文件router/index.js
import store from '../vuex/store'

Vue.config.productionTip = false //配置

/* eslint-disable no-new */
//实例化一个Vue对象
new Vue({
  el: '#app',  //将根组件挂载到div#app
  router,  //router:router 将router注入到根组件
  store,
  template: '<App/>', //声明组件的模板
  components: { App } //{App:App }注册一个组件App
})
