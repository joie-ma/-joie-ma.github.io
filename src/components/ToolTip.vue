<template>
    <!-- tooltip -->
    <el-tooltip placement="left" effect="white">
        <div slot="content">
            <div class="tip-tel">
                咨询电话<span>292929</span>
                <p>产品咨询&nbsp;&nbsp;商业合作</p>
            </div>
            <a href="http://localhost:8080/#/fankuipage/" class="tip-fankui">
                <span>反馈建议</span>
                <p>我们会对您的宝贵意见在24小时之内作出回应</p>
            </a>
        </div>
        <el-button><i>咨</i><i>询</i><i class="dot">.</i><i>反</i><i>馈</i></el-button>
    </el-tooltip>
</template>

<script>
export default {
    name: 'tooltip',
    data() {
        return {

        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tooltip.el-button--default{
    position: fixed;
    right: 50px;
    top: 40%;
    padding: 45px 15px 15px;
    border-radius: 0;
    color: #fff;
    border: 0;
    background: #666 url(../assets/tip.png) no-repeat center 15px;
    background-size: 17px;
    z-index: 9999;
}
.el-tooltip.el-button--default span{
    display: block;
}
.el-tooltip.el-button--default i{
    display: block;
    font-style: normal;
    line-height: 1;
    text-align: center;
}
.dot{
    margin-top: -5px;
    margin-bottom: 4px;
}
.tip-tel,.tip-fankui{
    background: #fff;
    border-right: 3px solid #fff;
    transition: all 0.2s;
    padding: 10px 15px;
}
.tip-tel:hover,.tip-fankui:hover{
    background: #f7f8fa;
    border-right: 3px solid #729aff;
}
.tip-tel,.tip-fankui{
    display: block;
    color: #292929;
    font-size: 14px;
}
.tip-fankui:hover span{
    color: #729aff;
}
.tip-tel span{
    margin-left: 23px;
}
.tip-tel p,.tip-fankui p{
    font-size: 12px;
    color: #666;
    margin: 3px 0 0;
}
</style>
<style>
    .el-tooltip__popper{
        border-radius: 0;
        box-shadow:0 0 6px rgba(0,0,0,0.2);
        padding: 10px 0;
        background: #fff;
    }
    .el-tooltip__popper.is-dark{
        background: #fff;
    }
    .popper__arrow,.el-tooltip__popper .popper__arrow{
        display: none;
    }
</style>
