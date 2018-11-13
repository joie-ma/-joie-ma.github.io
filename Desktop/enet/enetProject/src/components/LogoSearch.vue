<template>
<!-- logo和搜索 -->
<el-row type="flex" justify="space-between" class="banxin">
    <el-col :span="14" class="logo">
        <div class="grid-content">
            <router-link to="/"><img src="../assets/logo.png"></router-link>
        </div>
    </el-col>
    <el-col :span="10" class="search">
        <div class="grid-content">
            <el-input placeholder="请输入您需要的产品" v-model="search" class="input-with-select">
                <el-button slot="append">搜&nbsp;&nbsp;索</el-button>
            </el-input>
            <div class="search-a"><a :href="a.id" target="_blank" v-for="a in searchlist" :key="a.id">{{a.label}}</a></div>
        </div>
    </el-col>
</el-row>
</template>

<script>
export default {
    name: 'logosearch',
    data () {
        return {
            search: '',
            searchlist: [
                {id: '1', label: '云平台', pid: '0'},
                {id: '19', label: 'CDN加速', pid: '1'},
                {id: '28', label: 'H5开发', pid: '2'},
                {id: '30', label: '微信开发', pid: '2'},
                {id: '3', label: '办公应用', pid: '0'}
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banxin{
  background: #fff;
  padding: 55px 0 40px;
}
.logo a{
  display: inline-block;
  width: 100px;
  overflow: hidden;
}
.logo img{
  width: 100%;
}

.input-with-select{
  width: 100%;
}
.el-input__inner{
  border: 1px solid #666;
  border-radius: 0px;
  border-right: 0;
}
.el-button{
  color: #fff;
  background: #729aff;
  border: 1px solid #729aff;
  border-radius: 0px;
  letter-spacing: 2px;
}
.search .el-input-group__append{
  border:none;
}
.search-a{
  padding: 0 6px;
}
.search-a a{
  display: inline-block;
  padding: 6px 10px;
  color: #999;
}
</style>
