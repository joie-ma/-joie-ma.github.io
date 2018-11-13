<template>
    <!-- 关于我们：联系我们 -->
    <div>
        <div class="about-div">
            <h3>联系我们</h3>
            <p>您可以通过以下任一种方式及时联系到我们。</p>
        </div>
        <hr>
        <div class="about-div about-con">
            <h4><i class="el-icon-phone-outline"></i>联系电话</h4>
            <p>022-6339298 / 022-6339298</p>
            <hr>
            <h4><i class="el-icon-message"></i>联系邮箱</h4>
            <p>lbqiao@enet.com.cn</p>
            <hr>
            <h4><i class="el-icon-location-outline"></i>联系地址</h4>
            <p>北京市 / 朝阳区 / 东土城路12号 / 怡和阳光大厦C座1802室</p>
            <p><img src="../assets/map.jpg"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Acontact'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3,h4{
        line-height: 1;
    }
    h3{
        color: #313131;
        font-size: 20px;
    }
    h4{
        color: #333;
        font-size: 18px;
    }
    p{
        color: #666;
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
        margin: 0 0 8px;
    }
    .about-div{
        padding: 20px 45px 0 27px;
    }
    hr{
        height: 1px;
        width: 100%;
        background: #e9ecf1;
        margin:15px 0;
    }
    .about-con{
        margin-bottom: 55px;
    }
    .about-con h4,.about-con p{
        padding-left: 30px;
    }
    .about-con h4{
        position: relative;
        margin-bottom: 20px;
    }
    .about-con h4 i{
        width: 10px;
        height: 10px;
        border-radius: 50px;
        color: #729aff;
        display: inline-block;
        position: absolute;
        left: 0;
        line-height: 18px;
        top: 0px;
    }
    .el-icon-location-outline:before,.el-icon-message:before,.el-icon-phone-outline:before{
        color: #729aff;
    }
    p img{
        width: 425px;
    }
</style>
