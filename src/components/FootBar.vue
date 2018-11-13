<template>
<!-- 网站底部 -->
<div class="wrap-foot">
    <div class="banxin">
        <router-link to='/'><img src="../assets/logo.png" alt='360度企业服务平台'></router-link>
        <div class="sitemap">
            <div class="foot-nav">
                <P>服务产品导航</P>
                <a :href="item.id" v-for="item in footlist" :key="item.id" target="_blank">{{item.label}}</a>
            </div>
            <div class="about">
                <p>关于我们</p>
                <a href="" target="_blank">了解我们</a>
                <a href="" target="_blank">法律声明及隐私权政策</a>
            </div>
            <div class="contact">
                <p>联系我们</p>
                <a href="" target="_blank">反馈建议</a>
                <a href="" target="_blank">商务合作</a>
            </div>
            <div class="guanzhu">
                <p>关注我们</p>
                <img src="../assets/wchat.jpg" alt=''>
                <span>扫码关注微信公众号</span>
            </div>
        </div>
    </div>
    <div class="copyright">
        Copyright &#169; 2000--{{year}}硅谷动力公司版权所有 京ICP证000088号 京公网安备11010502026777号
    </div>
</div>
</template>

<script>
export default {
    name: 'foot',
    data () {
        return {
            footlist: [
                {id: '3', label: '办公应用', pid: '0', info: '全方位提供企业日常办公产品服务'},
                {id: '5', label: '财务管理', pid: '0', info: '实现企业财务管理流程自动化'},
                {id: '6', label: '人事管理', pid: '0', info: '涵盖人力资源的全套管理方案及服务'},
                {id: '7', label: '销售管理', pid: '0', info: '海量的CRM供您选择，为销售赋能'},
                {id: '8', label: '营销/客服', pid: '0', info: '为企业提供完善的营销/客服系统'},
                {id: '4', label: '生产/供应管理', pid: '0', info: '提供全面的ERP、MES管理系统'},
                {id: '2', label: '技术开发', pid: '0', info: '网站开发、H5、APP、小程序设计与开发'},
                {id: '1', label: '云平台', pid: '0', info: '海量提供领先、安全、稳定的云服务产品'},
                {id: '9', label: 'API服务', pid: '0', info: '提供最全面的API接口服务'}
            ]
        };
    },
    computed: {
        year: function() {
            var year = '';
            var mydate = new Date();
            var myyear = mydate.getYear();
            // year = (myyear > 200) ? myyear : 1900 + myyear;
            return (myyear > 200) ? myyear : 1900 + myyear;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-foot{
    background: #383838;
    color: #d2d2d2;
    font-size: 16px;
}
.banxin{
    padding: 40px 0;
}
.sitemap{
    padding: 45px 0;
    border-top: 1px solid #c7c7c7;
    border-bottom: 1px solid #c7c7c7;
    overflow: hidden;
}
p{
    color: #fefefe;
    line-height: 1;
    margin: 0 0 20px;
}
a{
    display: block;
}
img{
    display: block;
}
.sitemap a{
    color: #c7c7c7;
    font-size: 14px;
    width: 140px;
    line-height: 1;
    padding: 10px 0;
}
.foot-nav{
    width: 35%;
}
.foot-nav a{
    display: inline-block;
}
.about{
    width: 20%;
}
.contact{
    width: 18%;
}
.guanzhu{
    /*width: 28%;*/
    border-left: 1px solid #c7c7c7;
    padding: 0 0 0 105px;
}
.foot-nav,.about,.contact,.guanzhu{
    float: left;
    display: inline-block;
}
.guanzhu img{
    width: 100px;
    margin-bottom: 18px;
}
.guanzhu span{
    font-size: 14px;
    color: #c7c7c7;
}
.copyright{
    background: #333;
    padding: 18px 0;
    text-align: center;
}
</style>
