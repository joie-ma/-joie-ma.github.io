<template>
<!-- 首页九宫格 -->
<div class="banxin">
    <h2>全方位滿足您的产品和服务需求</h2>
    <p>办公应用，生产/供应管理；财务管理；人事管理；销售管理；营销/客服；云平台；技术开发；API服务</p>
    <div v-for="item in ninelist" :key="item.id" class="nine">
        <a :href="item.id" :style="{background:'url('+item.bgimg+') no-repeat center top','background-size':70}">{{item.label}}</a>
        <p>{{item.info}}</p>
    </div>
</div>
</template>

<script>
var office = require('../assets/office.png');
var money = require('../assets/money.png');
var hr = require('../assets/hr.png');
var sale = require('../assets/sale.png');
var marketing = require('../assets/marketing.png');
var production = require('../assets/production.png');
var tech = require('../assets/tech.png');
var cloud = require('../assets/cloud.png');
var api = require('../assets/api.png');

export default {
    name: 'nine',
    data () {
        return {
            ninelist: [
                {id: '3', label: '办公应用', pid: '0', info: '全方位提供企业日常办公产品服务', bgimg: office},
                {id: '5', label: '财务管理', pid: '0', info: '实现企业财务管理流程自动化', bgimg: money},
                {id: '6', label: '人事管理', pid: '0', info: '涵盖人力资源的全套管理方案及服务', bgimg: hr},
                {id: '7', label: '销售管理', pid: '0', info: '海量的CRM供您选择，为销售赋能', bgimg: sale},
                {id: '8', label: '营销/客服', pid: '0', info: '为企业提供完善的营销/客服系统', bgimg: marketing},
                {id: '4', label: '生产/供应管理', pid: '0', info: '提供全面的ERP、MES管理系统', bgimg: production},
                {id: '2', label: '技术开发', pid: '0', info: '网站开发、H5、APP、小程序设计与开发', bgimg: tech},
                {id: '1', label: '云平台', pid: '0', info: '海量提供领先、安全、稳定的云服务产品', bgimg: cloud},
                {id: '9', label: 'API服务', pid: '0', info: '提供最全面的API接口服务', bgimg: api}
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    text-align: center;
}
h2{
    color: #333;
    font-size: 26px;
    line-height: 1;
    margin: 70px 0 25px;
}
p{
    color: #666;
    font-size: 18px;
    line-height: 1;
    margin: 0 0 90px;
}
.nine{
    float: left;
    width: 33.33%;
}
.nine a{
    display: block;
    padding: 85px 0 0;
    font-size: 24px;
    color: #333;
    transition: all 0.1s;
}
.nine a:hover{
    color: #729aff;
}
.nine p{
    font-size: 16px;
    margin: 18px 0 75px;
}
.banxin{
    overflow: hidden;
}
</style>
