<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!-- 使用组件 -->
    <vue-first></vue-first>
    <ul class="nav">
      <li><router-link to="/left">左</router-link></li>
      <li><router-link to="/center">中</router-link></li>
      <li><router-link to="/right">右</router-link></li>
    </ul>
    
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>

    <router-view/>
  </div>
</template>

<script>
import first from './components/first/first';
import Toolbar from './components/Toolbar';
import NoteList from './components/NoteList';
import Editor from './components/Editor'
export default {
  name: 'app',
  components:{
    'vue-first':first,
    'toolbar':Toolbar,
    'note-list':NoteList,
    'editor':Editor,
  }
}
</script>

<style lang="less" scoped>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.nav{
  height: 60px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(7,17,17,0.1);
a{
    color:rgb(77,85,93);
    font-size:14px;
    text-decoration: none;
    &.router-link-active{
      color: rgb(240,20,20);
    }
  }
}
</style>
