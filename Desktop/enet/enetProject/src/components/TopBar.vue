<template>
<!-- 顶部黑条 -->
<div class="wrap-top">
    <el-row class="banxin">
        <el-col :span="18">
            <div class="grid-content">
                <el-row>
                    <el-col v-for="(left,index) in leftlist" :key="index">
                    <div class="grid-content"><router-link to="/">{{left.label}}</router-link></div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ">
                <el-row type="flex" justify="space-between">
                    <el-col :span="6" v-for="(top,index) in toplist" :key="index">
                        <div class="grid-content">
                            <router-link :to="top.path">{{top.label}}</router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'top',
    data () {
        return {
            leftlist: [
                {label: '360度企业服务平台', link: 'http://www.baidu.com'}
            ],
            toplist: [
                {label: '关于我们', path: '/aboutpage/'},
                {label: '联系我们', path: '/contactpage/'},
                {label: '反馈意见', path: '/fankuipage/'}
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-top{
  line-height:48px;
  background: #000;
}
.banxin{
  width: 1200px;
  margin: 0 auto;
}
a{
  color: #fff;
  font-size: 16px;
}
</style>
