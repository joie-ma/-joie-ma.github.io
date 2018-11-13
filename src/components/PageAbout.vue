<template>
<div class="wrap-gray">
    <!-- 顶部黑条 -->
    <topbar></topbar>
    <!-- 面包屑 -->
    <!-- 关于我们等tab -->
    <div class="banxin">
        <el-breadcrumb separator="">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>关于我们</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs :tab-position="tabPosition" v-model="activeName">
            <el-tab-pane label="关于我们" name="about"><Aabout></Aabout></el-tab-pane>
            <el-tab-pane label="联系我们" name="contact"><Acontact></Acontact></el-tab-pane>
            <el-tab-pane label="反馈建议" name="fankui"><Afankui></Afankui></el-tab-pane>
        </el-tabs>
    </div>
    <!-- 页面底部 -->
    <footbar></footbar>
</div>
</template>

<script>
import topbar from './TopBar.vue';
import footbar from './FootBar.vue';
import Aabout from './A-about.vue';
import Acontact from './A-contact.vue';
import Afankui from './A-fankui.vue';
export default {
    name: 'aboutus',
    components: {topbar, footbar, Aabout, Acontact, Afankui},
    data() {
        return {
            tabPosition: 'left',
            activeName: 'about'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .el-tabs__item{
        width: 265px;
        padding: 0 0 0 20px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #313131;
        text-align: left;
    }
    .el-tabs--left .el-tabs__active-bar.is-left{
        width: 3px;
    }
    .el-tabs__nav{
        background: #fff;
    }
    .el-tabs__nav-wrap::after{
        background-color: none;
    }
    .el-tabs--left .el-tabs__item.is-left{
        text-align: left;
    }
    .el-tabs--left .el-tabs__nav-wrap.is-left{
        height: auto;
    }
    .el-tabs--left .el-tabs__header.is-left{
        margin-right: 20px;
    }
    .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after{
        left: 0;
        right: auto;
    }
    .el-tabs__content{
        background: #fff;
        margin-bottom: 100px;
    }
    .el-form-item__label{
        color: #313131;
        font-size: 16px;
        padding: 0 40px 0 0;
    }
    .el-upload--picture-card,.el-upload-list--picture-card .el-upload-list__item{
        background: #eaeaea;
        width: 235px;
        height: 200px;
    }
    .el-upload--picture-card i{
        font-size: 16px;
        color: #333;
    }
    .el-icon-circle-plus:before{
        display: block;
        color: #fff;
        font-size: 40px;
        margin: 60px 0 6px;
    }
    .el-form-item{
        margin-bottom: 25px;
    }
    .el-radio__label{
        color: #666;
        font-size: 16px;
    }
    .el-form-item.is-required .el-form-item__label:before{
        font-size: 24px;
        color: #ff2b3f;
        line-height: 1;
        position: relative;
        top: 7px;
    }
    .el-input__inner,.el-textarea__inner{
        border: 1px solid #999;
        border-radius: 0;
        height: 50px;
        font-size: 16px;
    }
    .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus{
        border-color: #999;
    }
</style>
