<template>
<div>测试</div>
<!-- 菜单导航 -->
<el-row type="flex" justify="space-between" class="banxin">
    <el-col :span="5" class="menu" >
      <div class="grid-content">
            <span class="dropdown" @click="show=!show">企业服务分类</span>
            <transition name="fade">
                <div v-if="show" class="dropcon">
                    <div v-for="(parent,index) in navAll" :key="index">
                        <a :class="{active:isActive}" :href="parent.id" target="_blank" :key="parent.id">{{parent.label}}</a>
                        <div><a v-for="child in parent.children" :href="child.id" target="_blank" :key="child.id">{{child.label}}</a></div>
                    </div>
                </div>
            </transition>
      </div>
    </el-col>
    <el-col :span="19" class="nav">
        <div class="grid-content">
            <a v-for="(item,index) in navmain" :href="item.id" target="_blank" :key="index" v-html="item.label"></a>
        </div>
    </el-col>
</el-row>
</template>

<script>
export default {
    name: 'menunav',
    data () {
        return {
            isActive: true,
            show: false,
            navmain: [
                {id: '1', label: '云平台', pid: '0'},
                {id: '2', label: '技术开发', pid: '0'},
                {id: '9', label: 'API服务', pid: '0'},
                {id: '25', label: '安全服务', pid: '1'},
                {id: '45', label: '媒体服务', pid: '8'},
                {id: '46', label: '呼叫中心', pid: '8'},
                {id: '45', label: '推荐产品1<span>荐</span>', pid: '8'},
                {id: '46', label: '推荐产品2<span>HOT</span>', pid: '8'}
            ],
            navAll: [
                {
                    id: 1,
                    label: '云平台',
                    pid: 0,
                    children: [
                        {id: 16, label: '公有云', pid: 1, children: []},
                        {id: 17, label: '私有云', pid: 1, children: []},
                        {id: 18, label: '网络专线', pid: 1, children: []},
                        {id: 19, label: 'CDN加速', pid: 1, children: []},
                        {id: 20, label: '容器服务', pid: 1, children: []},
                        {id: 21, label: '对象存储COS', pid: 1, children: []},
                        {id: 22, label: '域名服务', pid: 1, children: []},
                        {id: 23, label: '弹性高性能计算', pid: 1, children: []},
                        {id: 24, label: '平台迁移', pid: 1, children: []},
                        {id: 25, label: '安全服务', pid: 1, children: []}
                    ]
                },
                {
                    id: 2,
                    label: '技术开发3',
                    pid: 0,
                    children: [
                        {id: 26, label: '基础软件', pid: 2, children: []},
                        {id: 27, label: '网站建设', pid: 2, children: []},
                        {id: 28, label: 'H5开发', pid: 2, children: []},
                        {id: 29, label: 'APP开发', pid: 2, children: []},
                        {id: 30, label: '微信开发', pid: 2, children: []},
                        {id: 31, label: '维护测试', pid: 2, children: []}
                    ]
                },
                {
                    id: 3,
                    label: '办公应用',
                    pid: 0,
                    children: [
                        {id: 32, label: 'OA', pid: 3, children: []},
                        {id: 33, label: '邮箱', pid: 3, children: []},
                        {id: 34, label: '视频会议', pid: 3, children: []},
                        {id: 35, label: '项目管理', pid: 3, children: []},
                        {id: 36, label: '安防监控', pid: 3, children: []},
                        {id: 37, label: '商业智能分析', pid: 3, children: []}
                    ]
                },
                {
                    id: 4,
                    label: '生产/供应管理',
                    pid: 0,
                    children: [
                        {id: 38, label: 'ERP', pid: 4, children: []},
                        {id: 39, label: 'MES', pid: 4, children: []}
                    ]
                },
                {
                    id: 5,
                    label: '财务管理',
                    pid: 0,
                    children: [
                        {id: 40, label: '财务', pid: 5, children: []}
                    ]
                },
                {
                    id: 6,
                    label: '人事管理',
                    pid: 0,
                    children: [
                        {id: 41, label: '人事管理', pid: 6, children: []},
                        {id: 42, label: '招聘', pid: 6, children: []}
                    ]
                },
                {
                    id: 7,
                    label: '销售管理',
                    pid: 0,
                    children: [
                        {id: 43, label: 'CRM', pid: 7, children: []}
                    ]
                },
                {
                    id: 8,
                    label: '营销/客服',
                    pid: 0,
                    children: [
                        {id: 44, label: '广告营销', pid: 8, children: []},
                        {id: 45, label: '媒体服务', pid: 8, children: []},
                        {id: 46, label: '呼叫中心', pid: 8, children: []}
                    ]
                },
                {
                    id: 9,
                    label: 'API服务',
                    pid: 0,
                    children: [
                        {id: 47, label: '电子商务', pid: 9, children: []},
                        {id: 48, label: '人工智能', pid: 9, children: []},
                        {id: 49, label: '金融理财', pid: 9, children: []},
                        {id: 50, label: '交通地理', pid: 9, children: []},
                        {id: 51, label: '企业管理', pid: 9, children: []},
                        {id: 52, label: '公共事务', pid: 9, children: []},
                        {id: 53, label: '气象水利', pid: 9, children: []},
                        {id: 54, label: '生活服务', pid: 9, children: []}
                    ]
                }
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  font-size: 18px;
  color: #393939;
  background: #2d2e38;
  padding: 12px 10px;
  position: relative;
  cursor: pointer;
}
.menu .dropdown{
  font-size: inherit;
  color: #fff;
  display: block;
}
.menu a{
  display: inline-block;
  font-size: 12px;
  color: #fff;
  padding: 3px 6px;
  transition: all 0.2s;
}
.menu a:hover{
  color: #89d1ff;
}
.menu .dropcon{
  position: absolute;
  top: 48px;
  left: 0;
  background: #3c4278;
  z-index: 9999;
}
.dropcon a.active{
  font-size: 16px;
}
.dropcon>div{
  padding: 9px 4px;
}
.dropcon>div:nth-child(2n+1){
  background: #373c6d;
}
.el-popper .popper__arrow{
  display: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.nav{
  line-height: 49px;
  font-size: 18px;
  color: #393939;
  text-align: right;
}
.nav a{
   color: #393939;
   display: inline-block;
   margin-left: 30px;
}
</style>
<style>
    .nav a span{
      color: #ff953f;
      font-size: 14px;
      display: inline-block;
      border: 1px solid #ff953f;
      border-radius: 3px;
      margin-left: 4px;
      line-height: 1;
      padding: 2px 4px;
    }
</style>
