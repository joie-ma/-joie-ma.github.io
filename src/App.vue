<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import homepage from './components/PageHome.vue';
export default {
    name: 'App',
    components: {homepage}
};
</script>

<style>
*{
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
}
body{
  margin:0;
  background: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1200px;
}
.banxin{
  width: 1200px;
  margin: 0 auto;
}
.wrap-gray{
  background: #f7f8fa;
}
.el-breadcrumb{
  margin: 18px 0;
  border-left: 3px solid #333;
  padding-left: 8px;
}
.el-breadcrumb__separator{
  background:url('assets/breadcrumb.png') no-repeat center;
  width: 17px;
  height: 10px;
  display: inline-block;
  margin: 0 15px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner{
  color: #999;
}
</style>
