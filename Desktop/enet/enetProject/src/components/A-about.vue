<template>
    <!-- 关于我们：关于我们 -->
    <div>
<!--测试覆盖-->
        <div class="about-div">
            <h3>关于我们</h3>
            <p>一句话描述产品的定位，一句话描述产品的定位。</p>
        </div>
        <hr>
        <div class="about-div about-con">
            <h4><i></i>企业服务正在悄然成为投资机构关注的重点</h4>
            <p>投资机构一般把To B业务分成两种，一种是以交易平台为主，通过平台撮合企业间的交易；但大多数是企业级服务，主要是面向企业的工具应用，包括企业注册服务、财税服务，企业IT服务、客户关系管理、人才管理、软件开发、数据分析等。</p>
            <p>当不少国内创业者还沉浸在O2O的热潮之中时，企业级服务正在悄然成为投资机构关注的新重点。近几年来，红杉资本、老虎基金、IDG资本、北极光创投、DCM创投等重磅投资公司的目光，逐渐更深更广的触及到了企业服务领域，在面向消费者的另一端，那些面向企业（To B）的服务，正在因为强需求而快速增长。</p>
            <h4><i></i>变革时代，造就了中国企业服务的机会</h4>
            <p>在过去很长一段时间里，企业级服务不被投资人看好。直到2015年，这一年可以说是中国企业服务开始崭露头角的一年。从这一年开始，企业级服务的投融资次数就爆发式增长，新成立的企业级服务公司也如雨后春笋般涌现。根据IT桔子的统计，15年的融资次数从14年的295起上升到442起，15年一年发生了737起企业服务融资。这一年，在以阿里钉钉、纷享销客、八百客等前沿的SaaS公司的带领下，企业数字化、云端化发展方兴未艾。</p>
            <p>当不少国内创业者还沉浸在O2O的热潮之中时，企业级服务正在悄然成为投资机构关注的新重点。近几年来，红杉资本、老虎基金、IDG资本、北极光创投、DCM创投等重磅投资公司的目光，逐渐更深更广的触及到了企业服务领域，在面向消费者的另一端，那些面向企业（To B）的服务，正在因为强需求而快速增长。</p>
            <h4><i></i>云服务是企业服务的重点发力市场</h4>
            <p>在过去很长一段时间里，企业级服务不被投资人看好。直到2015年，这一年可以说是中国企业服务开始崭露头角的一年。从这一年开始，企业级服务的投融资次数就爆发式增长，新成立的企业级服务公司也如雨后春笋般涌现。根据IT桔子的统计，15年的融资次数从14年的295起上升到442起，15年一年发生了737起企业服务融资。这一年，在以阿里钉钉、纷享销客、八百客等前沿的SaaS公司的带领下，企业数字化、云端化发展方兴未艾。</p>
            <p>当不少国内创业者还沉浸在O2O的热潮之中时，企业级服务正在悄然成为投资机构关注的新重点。近几年来，红杉资本、老虎基金、IDG资本、北极光创投、DCM创投等重磅投资公司的目光，逐渐更深更广的触及到了企业服务领域，在面向消费者的另一端，那些面向企业（To B）的服务，正在因为强需求而快速增长。</p>
        </div>
        <!-- <router-link to="/test/about">11</router-link>
        <router-link to="/test/contact">22</router-link>
        <router-link to="/test/fankui">33</router-link> -->
    </div>
</template>

<script>
export default {
    name: 'Aabout'
    // data() {
    //     return {
    //         a: this.$route.params.a
    //     };
    // },
    // beforeRouteUpdate (to, from, next) {
    //     next();
    //     this.a = this.$route.params.a;
    // }
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
        padding-left: 20px;
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
        background: #729aff;
        display: inline-block;
        position: absolute;
        left: 0;
        line-height: 18px;
        top: 3px;
    }
    .el-icon-location-outline:before,.el-icon-message:before,.el-icon-phone-outline:before{
        color: #729aff;
    }
    p img{
        width: 425px;
    }
    .contact-con h4, .contact-con p{
        padding-left: 30px;
    }
    .contact-con h4 i{
        top: 0;
        background: none;
    }
</style>
