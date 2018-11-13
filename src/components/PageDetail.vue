<template>
  <div>
    <topbar></topbar>
    <logosearch></logosearch>
    <menunav></menunav>
    <div class="wrap-gray">
    <div class="banxin">
    <el-breadcrumb separator="">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品列表</el-breadcrumb-item>
      <el-breadcrumb-item>产品详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
        <el-main :style="{'padding':0}">
            <div class="pro">
                <div class="pro-img"><img :src="promsg.img" alt=""></div>
                <div class="pro-c">
                    <h3>{{promsg.tit}}</h3>
                    <p class="intro">{{promsg.intro}}</p>
                    <p><span>交付方式：{{promsg.deliver}}</span><span>操作系统：{{promsg.operate}}</span></p>
                </div>
                <div class="pro-r">
                    <p>参考价格：<span class="price">{{promsg.price}}</span></p>
                    <p>产品星级：<el-rate class="star" v-model="promsg.star" disabled show-score text-color="#ff9900" score-template=""></el-rate></p>
                    <p>查看人数：<span class="read">{{promsg.read}}</span></p>
                </div>
            </div>
            <div class="detail">
                <h4>产品详情</h4>
                <div>
                    <h5>产品亮点</h5>
                    <p>产品简介产品简介产品简介产品简产品简介产品简介产<br>品简介产品简介介产品简介产品简介产品简介产品简介产品</p>
                </div>
                <div>
                    <h5>产品说明</h5>
                    <p>产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品</p>
                    <p><img src="../assets/p.jpg" alt=""></p>
                    <p>一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品字段一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品说明字段一堆产品说明字段</p>
                </div>
                <div>
                    <h5>其他等说明</h5>
                    <p>产品简介产品简介产品简介产品简产品简一堆产品说明语言介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品</p>
                </div>
            </div>
            <div class="case">
                <h4>产品案例</h4>
                <div>
                    <a href=""><img src="../assets/c1.jpg" alt=""></a>
                    <a href=""><img src="../assets/c2.jpg" alt=""></a>
                    <a href=""><img src="../assets/c3.jpg" alt=""></a>
                    <a href=""><img src="../assets/c4.jpg" alt=""></a>
                    <a href=""><img src="../assets/c5.jpg" alt=""></a>
                    <a href=""><img src="../assets/c6.jpg" alt=""></a>
                    <a href=""><img src="../assets/c7.jpg" alt=""></a>
                    <a href=""><img src="../assets/c8.jpg" alt=""></a>
                </div>
            </div>
            <div class="other">
                <h4>该服务商其他产品推荐</h4>
                <div>
                    <a href="" target="_blank" class="other-con">
                        <div class="other-img"><img src="../assets/饱和OA.jpg" alt=""></div>
                        <div class="other-info">
                            产品名称
                            <p>产品简介产品简介产品简介产品简介产品简介产品产品简介</p>
                        </div>
                    </a>
                    <a href="" target="_blank" class="other-con">
                        <div class="other-img"><img src="../assets/硅谷云OA.jpg" alt=""></div>
                        <div class="other-info">
                            产品名称
                            <p>产品简介产品简介产品简介产品简介产品简介产品产品简介</p>
                        </div>
                    </a>
                    <a href="" target="_blank" class="other-con">
                        <div class="other-img"><img src="../assets/饱和OA饱和OA.jpg" alt=""></div>
                        <div class="other-info">
                            产品名称
                            <p>产品简介产品简介产品简介产品简介产品简介产品产品简介</p>
                        </div>
                    </a>
                </div>
            </div>
        </el-main>
        <el-aside width="290px" :style="{'margin-left':'20px'}">
            <div class="gongsi">
                <h4>服务商信息</h4>
                <div>
                    <h5 class="gs-name">服务商名称</h5>
                    <p>北京市硅谷动力电子商务有限公司</p>
                </div>
                <div>
                    <h5 class="gs-intro">服务商简介</h5>
                    <p>谷动力是中国最具影响力的科技网站之一，目前日访问量已达1800万以上。自1999年6月创立起，eNet硅谷动力一直致力于提供IT信息与商务服务。</p>
                </div>
                <div>
                    <h5 class="gs-kefu">售前客服</h5>
                    <p>客服热线：<span class="tel">010-65245588</span></p>
                    <p>邮件地址：<span class="mail">lboqiao@enet.com.cn</span></p>
                </div>
            </div>
            <div class="xiangguan">
                <h4>相关产品推荐</h4>
                <div>
                    <a href="" target="_blank" class="xiangguan-con">
                        <div class="xiangguan-img"><img src="../assets/饱和OA.jpg" alt=""></div>
                        <div class="xiangguan-info">
                            产品名称
                            <p>产品简介产品简介产品简介产品简介产品简介产品产品简介</p>
                        </div>
                    </a>
                    <a href="" target="_blank" class="xiangguan-con">
                        <div class="xiangguan-img"><img src="../assets/硅谷云OA.jpg" alt=""></div>
                        <div class="xiangguan-info">
                            产品名称
                            <p>产品简介产品简介产品简介产品简介产品简介产品产品简介</p>
                        </div>
                    </a>
                    <a href="" target="_blank" class="xiangguan-con">
                        <div class="xiangguan-img"><img src="../assets/饱和OA饱和OA.jpg" alt=""></div>
                        <div class="xiangguan-info">
                            产品名称
                            <p>产品简介产品简介产品简介产品简介产品简介产品产品简介</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="ads">其他广告位</div>
        </el-aside>

    </el-container>
    </div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import topbar from './TopBar.vue';
import logosearch from './LogoSearch.vue';
import menunav from './MenuNav.vue';
import footbar from './FootBar.vue';
var pro4 = require('../assets/硅谷云OA.jpg');
export default {
    name: 'detailpage',
    components: {topbar, logosearch, menunav, footbar},
    data () {
        return {
            promsg: {
                tit: '产品名字',
                gs: '服务商名称',
                intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品',
                deliver: '交付方式',
                operate: '操作系统',
                price: '￥3780/年',
                star: 3.5,
                read: 33,
                img: pro4,
                tag: ['标签一', '标签二', '标签三', '标签四', '标签五']
            }
        };
    }
};
</script>
<style scoped>
.wrap-gray{
    overflow: hidden;
}
h3{
    color: #333;
    font-size: 20px;
    line-height: 1;
    margin:0 0 10px;
}
h4{
    font-size: 16px;
    color: #729aff;
    line-height: 1;
    padding: 18px 20px;
    border-bottom: 1px solid #d9dde7;
    margin:0 0 10px;
}
h5{
    font-size: 18px;
    color: #333;
    line-height: 1;
    margin-bottom: 15px;
    position: relative;
}
h5:before{
    width: 15px;
    height: 15px;
    background: #729aff;
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left:-20px;
}
p{
    font-size: 16px;
    color: #666;
    margin: 0 0 8px;
    line-height: 24px;
}
.pro{
    overflow:hidden;
    padding: 22px 20px 20px;
    margin-bottom: 15px;
    background: #fff;
}
.pro-img,.pro-con,.pro-c,.pro-r{
    float:left;
}
.pro-img{
    width: 105px;
    height: 105px;
    overflow: hidden;
    margin-right: 20px;
}
.pro-img img{
    width: 100%;
}
.pro-c{
    width: 540px;
}
.pro-c p{
    width: 80%;
}
.price{
    color: #ff8149;
}
.read{
    color: #729aff;
    font-size: 14px;
}
.el-rate{
    display: inline-block;
}

.pro-c span{
    font-size: 14px;
    display: block;
    float: left;
    margin-right: 50px;
}
.detail,.other,.case,.gongsi,.xiangguan{
    background: #fff;
    margin-bottom: 15px;
    padding-bottom: 10px;
    overflow: hidden;
}
.detail>div{
    padding: 20px 20px 0;
    margin: 0 20px;
    border-bottom: 1px solid #d9dde7;

}
.detail img{
    display: block;
    width: 100%;
}
.other>div,.case>div{
    padding: 0 20px;
}
.detail>div:last-child{
    border-bottom:0;
}
.case a{
    display: block;
    width: 25%;
    text-align: center;
    float: left;
}
.case a img{
    display: inline-block;
    width: 90%;
}
.other-con{
    display: block;
    float: left;
    width: 33.33%;
    border-right: 1px solid #d9dde7;
    margin: 25px 0;
    padding: 0 15px;
    font-size: 16px;
    color: #333;
}
.other-con p{
    font-size: 12px;
    color: #666;
    line-height: 20px;
    margin-top: 8px;
}
.other-con .other-img{
    float: left;
    width: 27%;
    overflow: hidden;
    text-align: center;
}
.other-img img{
    margin-top: 15px;
    width: 90%
}
.other-con .other-info{
    float: left;
    width: 70%;
    margin-left: 3%;
}
.other-con:nth-child(3n){
    border-right: 0;
}
.gongsi>div{
    padding: 0 20px;
    margin: 0 20px;
    border-bottom: 1px solid #d9dde7;
}
.gongsi>div:last-child{
    border: 0;
}
.gongsi h4,.xiangguan h4{
    margin:0;
}
.gongsi h5,.xiangguan h5{
    font-size: 16px;
    color: #333;
    margin: 15px 0 12px;
}
.gongsi p,.xiangguan p{
    font-size: 14px;
    color: #666;
    line-height: 20px;
}
.tel{
    color:#ff8149;
}
.mail{
    color: #333;
}
.xiangguan>div{
    padding: 0 20px;
}
.xiangguan-con{
    overflow:hidden;
    display: block;
    padding: 20px 0;
    border-bottom: 1px solid #d9dde7;
}
.xiangguan-con:last-child{
    border: none;
}
.xiangguan-img{
    width:33%;
    float:left;
    text-align: left;
}
.xiangguan-img img{
    width: 90%;
}
.xiangguan-info{
    width: 67%;
    color:#333;
    font-size:16px;
    float: left;
}
.xiangguan-info p{
    color:#666;
    font-size:12px;
}
.gs-name:before,.gs-intro:before,.gs-kefu:before{
    width: 19px;
    height: 22px;
    top: -6px;
    left: -28px;
    background: url(../assets/gs.png) no-repeat left center;
    background-size: 100%;
    border-radius: 0;
}
.gs-intro:before{
    background: url(../assets/js.png) no-repeat left center;
    background-size: 100%;
}
.gs-kefu:before{
    background: url(../assets/kf.png) no-repeat left center;
    background-size: 100%;
}
.ads{
    height: 150px;
    background: #fff;
    text-align: center;
    line-height: 150px;
}
</style>
<style>
    .el-rate__icon{
        margin-right: 2px;
    }
   .el-pagination.is-background .el-pager li{
    border-radius: 0;
   }
   .el-pagination.is-background .el-pager li.active{
    background-color: #729aff;
   }
</style>
