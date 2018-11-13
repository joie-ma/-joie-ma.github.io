<template>
<!-- 首页tabs -->
<div>
    <div class="banxin">
    <!-- tab50% -->
        <div v-for="(tab,index) in tablist" :key="tab.id" :class="{classa:istrue}">
            <div class="tab-tit"><a :href="tab.id" target="_blank">{{tab.label}}</a><p>{{tab.info}}</p></div>
            <i class="line"></i>
            <div class="tab-item">
                <a v-for="(ctab,cindex) in tab.children" :key="ctab.id" :class="{active:ctab.show}" :href="ctab.id" @mouseenter="showcontent(index,cindex)"  target="_blank">
                    {{ctab.label}}</a>
            </div>
            <div v-for="(ctab,cindex) in tab.children" :key="cindex" v-show="ctab.show">
                <transition-group name="fade">
                    <div class="tab-con" v-for="(pitem, pindex) in chanpins" :key="pindex" @mouseenter="mouse(pindex)" @mouseleave="mouseleave(pindex)">
                        <a :href="pitem.link" target="_blank">
                            <img :src="pitem.imgurl">
                            <h3>{{pitem.name}}</h3>
                            <div class="change" >
                                <p v-if="!pitem.change" class="slogen">{{pitem.slogen}}</p>
                                <div v-else class="price-gongsi">
                                    <p class="price">{{pitem.price}}</p>
                                    <p class="gongsi">{{pitem.gongsi}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </transition-group>
            </div>
        </div>
    </div>
    <!-- tab100% -->
    <div class="wrap-gray">
        <div class="banxin">
            <div v-for="(tab,index) in tablist01" :key="tab.id" :class="{classb:istrue}">
                <div class="tab-tit"><a :href="tab.id" target="_blank">{{tab.label}}</a><p>{{tab.info}}</p></div>
                <i class="line"></i>
                <div class="tab-item">
                    <a v-for="(ctab,cindex) in tab.children" :key="ctab.id" :class="{active:ctab.show}" :href="ctab.id" @mouseenter="showcontent01(index,cindex)" target="_blank">
                        {{ctab.label}}</a>
                </div>
                <div v-for="(ctab,cindex) in tab.children" :key="cindex" v-show="ctab.show">
                    <transition-group name="fade">
                        <div class="tab-con tab-quan" v-for="(pitem, pindex) in chanpins01" :key="pindex" @mouseenter="mouse01(pindex)" @mouseleave="mouseleave01(pindex)" >
                            <a :href="pitem.link" target="_blank">
                                <img :src="pitem.imgurl">
                                <h3>{{pitem.name}}</h3>
                                <div class="change">
                                    <p v-if="!pitem.change" class="slogen">{{pitem.slogen}}</p>
                                    <div v-else class="price-gongsi">
                                        <p class="price">{{pitem.price}}</p>
                                        <p class="gongsi">{{pitem.gongsi}}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'tabs',
    computed: {
    },
    methods: {
        showcontent (index, cindex) {
            for (var i = 0; i < this.tablist.length; i++) {
                for (var j = 0; j < this.tablist[i].children.length; j++) {
                    if (i === index) {
                        if (j === cindex) {
                            this.tablist[index].children[cindex].show = true;
                        } else {
                            this.tablist[index].children[j].show = false;
                        }
                    }
                }
            }
        },
        showcontent01 (index, cindex) {
            for (var i = 0; i < this.tablist01.length; i++) {
                for (var j = 0; j < this.tablist01[i].children.length; j++) {
                    if (i === index) {
                        if (j === cindex) {
                            this.tablist01[index].children[cindex].show = true;
                        } else {
                            this.tablist01[index].children[j].show = false;
                        }
                    }
                }
            }
        },
        mouse (index) {
            for (var i = 0; i < this.chanpins.length; i++) {
                this.chanpins[i].change = false;
                this.chanpins[index].change = true;
            }
        },
        mouseleave (index) {
            for (var i = 0; i < this.chanpins.length; i++) {
                this.chanpins[i].change = false;
            }
        },
        mouse01 (index) {
            for (var i = 0; i < this.chanpins01.length; i++) {
                this.chanpins01[i].change = false;
                this.chanpins01[index].change = true;
            }
        },
        mouseleave01 (index) {
            for (var i = 0; i < this.chanpins01.length; i++) {
                this.chanpins01[i].change = false;
            }
        }

    },
    data () {
        return {
            istrue: true,
            tablist: [
                {
                    id: 3,
                    label: '办公应用',
                    pid: 0,
                    info: '全方位提供企业日常办公产品服务',
                    children: [
                        {id: 32, label: 'OA', pid: 3, children: [], show: true},
                        {id: 33, label: '邮箱', pid: 3, children: [], show: false},
                        {id: 34, label: '视频会议', pid: 3, children: [], show: false},
                        {id: 35, label: '项目管理', pid: 3, children: [], show: false},
                        {id: 36, label: '安防监控', pid: 3, children: [], show: false},
                        {id: 37, label: '商业智能分析', pid: 3, children: [], show: false}
                    ]
                },
                {
                    id: 5,
                    label: '财务管理',
                    pid: 0,
                    info: '实现企业财务管理流程自动化',
                    children: [
                        {id: 40, label: '财务', pid: 5, children: [], show: true}
                    ]
                },
                {
                    id: 6,
                    label: '人事管理',
                    pid: 0,
                    info: '涵盖人力资源的全套管理方案及服务',
                    children: [
                        {id: 41, label: '人事管理', pid: 6, children: [], show: true},
                        {id: 42, label: '招聘', pid: 6, children: [], show: false}
                    ]
                },
                {
                    id: 7,
                    label: '销售管理',
                    pid: 0,
                    info: '海量的CRM供您选择，为销售赋能',
                    children: [
                        {id: 43, label: 'CRM', pid: 7, children: [], show: true}
                    ]
                },
                {
                    id: 8,
                    label: '营销/客服',
                    pid: 0,
                    info: '为企业提供完善的营销/客服系统',
                    children: [
                        {id: 44, label: '广告营销', pid: 8, children: [], show: true},
                        {id: 45, label: '媒体服务', pid: 8, children: [], show: false},
                        {id: 46, label: '呼叫中心', pid: 8, children: [], show: false}
                    ]
                },
                {
                    id: 4,
                    label: '生产/供应管理',
                    pid: 0,
                    info: '提供全面的ERP、MES管理系统',
                    children: [
                        {id: 38, label: 'ERP', pid: 4, children: [], show: true},
                        {id: 39, label: 'MES', pid: 4, children: [], show: false}
                    ]
                }
            ],
            tablist01: [
                {
                    id: 1,
                    label: '云平台',
                    pid: 0,
                    info: '海量提供领先、安全、稳定的云服务产品',
                    children: [
                        {id: 16, label: '公有云', pid: 1, children: [], show: true},
                        {id: 17, label: '私有云', pid: 1, children: [], show: false},
                        {id: 18, label: '网络专线', pid: 1, children: [], show: false},
                        {id: 19, label: 'CDN加速', pid: 1, children: [], show: false},
                        {id: 20, label: '容器服务', pid: 1, children: [], show: false},
                        {id: 21, label: '对象存储COS', pid: 1, children: [], show: false},
                        {id: 22, label: '域名服务', pid: 1, children: [], show: false},
                        {id: 23, label: '弹性高性能计算', pid: 1, children: [], show: false},
                        {id: 24, label: '平台迁移', pid: 1, children: [], show: false},
                        {id: 25, label: '安全服务', pid: 1, children: [], show: false}
                    ]
                },
                {
                    id: 2,
                    label: '技术开发',
                    pid: 0,
                    info: '网站开发、H5、APP、小程序设计与开发',
                    children: [
                        {id: 26, label: '基础软件', pid: 2, children: [], show: true},
                        {id: 27, label: '网站建设', pid: 2, children: [], show: false},
                        {id: 28, label: 'H5开发', pid: 2, children: [], show: false},
                        {id: 29, label: 'APP开发', pid: 2, children: [], show: false},
                        {id: 30, label: '微信开发', pid: 2, children: [], show: false},
                        {id: 31, label: '维护测试', pid: 2, children: [], show: false}
                    ]
                },
                {
                    id: 9,
                    label: 'API服务',
                    pid: 0,
                    info: '提供最全面的API接口服务',
                    children: [
                        {id: 47, label: '电子商务', pid: 9, children: [], show: true},
                        {id: 48, label: '人工智能', pid: 9, children: [], show: false},
                        {id: 49, label: '金融理财', pid: 9, children: [], show: false},
                        {id: 50, label: '交通地理', pid: 9, children: [], show: false},
                        {id: 51, label: '企业管理', pid: 9, children: [], show: false},
                        {id: 52, label: '公共事务', pid: 9, children: [], show: false},
                        {id: 53, label: '气象水利', pid: 9, children: [], show: false},
                        {id: 54, label: '生活服务', pid: 9, children: [], show: false}
                    ]
                }
            ],
            chanpins: [
                {name: '硅谷云OA', imgurl: require('../assets/硅谷云OA.jpg'), gongsi: '北京市硅谷动力电子商务有限公司', link: '', price: '¥3989/年', slogen: '为用户打造专属的私有云协同办公平台', logo: '', change: false},
                {name: '超级棒OA', imgurl: require('../assets/超级棒OA.jpg'), gongsi: '为用户打造专属的私有云协同办公平台', link: '', price: '¥39/年', slogen: '为属的私有云协同办公平台', logo: '', change: false},
                {name: '硅谷云OA', imgurl: require('../assets/硅谷云OA.jpg'), gongsi: '北京市硅谷动力电子商务有限公司', link: '', price: '¥3989/年', slogen: '为用户打造专属的私有云协同办公平台', logo: '', change: false}
            ],
            chanpins01: [
                {name: '饱和OA饱和OA', imgurl: require('../assets/饱和OA饱和OA.jpg'), gongsi: '为用户打造专公平台为用户打造专公平台为用户打造专公平台', link: '', price: '¥3009/年', slogen: '为属的私有云协同办私有云协同办私有云协同办私有云协同办公平台', logo: '', change: false},
                {name: '硅谷云OA', imgurl: require('../assets/硅谷云OA.jpg'), gongsi: '北京市硅谷动力电子商务有限公司', link: '', price: '¥3989/年', slogen: '为用户打造专属的私有云协同办公平台', logo: '', change: false},
                {name: '饱和OA', imgurl: require('../assets/饱和OA.jpg'), gongsi: '为用户打造专公平台', link: '', price: '¥30009/年', slogen: '为属的私有云协同办私有云协同办私有云协同办私有云协同办公平台', logo: '', change: false},
                {name: '饱和OA饱和OA', imgurl: require('../assets/饱和OA饱和OA.jpg'), gongsi: '为用户打造专公平台为用户打造专公平台为用户打造专公平台', link: '', price: '¥3009/年', slogen: '为属的私有云协同办私有云协同办私有云协同办私有云协同办公平台', logo: '', change: false},
                {name: '硅谷云OA', imgurl: require('../assets/硅谷云OA.jpg'), gongsi: '北京市硅谷动力电子商务有限公司', link: '', price: '¥3989/年', slogen: '为用户打造专属的私有云协同办公平台', logo: '', change: false}
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-gray{
    padding-top: 40px;
}
.tab-con{
  width: 200px;
  height: 235px;
  padding: 0 0 5px;
  float: left;
  text-align: center;
}
.tab-item{
    line-height: 40px;
    margin-bottom: 10px;
}
.tab-con>a{
    height: 100%;
    background: #fff;
    display: block;
    margin: 0 10px;
    padding: 10px 0 0;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    transition: all .3s;
}
.tab-con>a:hover{
    box-shadow: 0 0 8px rgba(0,0,0,.3);
}
.tab-tit {
    overflow: hidden;
}
.tab-tit a{
    color: #333;
    font-size: 24px;
    transition: all 0.2s;
}
.tab-tit a:hover{
    color: #729aff;
}
.tab-tit p{
    font-size: 16px;
    color: #666;
    float: right;
    margin: 0;
}
.tab-item>a{
  font-size: 16px;
  color: #333;
  margin-right: 20px;
  font-weight: bold;
  border-bottom:3px solid rgba(0,0,0,0);
}

.tab-con img{
    display: inline-block;
    margin: 10px 0;
    width: 135px;
}
.tab-con a h3{
    font-size: 18px;
    color: #333;
    line-height: 1;
    margin: 10px 0;
}
.tab-con a p{
    color: #666;
    font-size: 14px;
}
.line{
    display: block;
    height: 1px;
    background: #999;
    margin: 0 10px;
}
.classa,.classb{
    display: inline-block;
    float: left;
    margin-bottom: 42px;
}
.classb .tab-con{
    width:20%;
    height: 270px;
}
.tab-tit,.tab-item{
    padding: 0 10px;
}
.price-gongsi{
    background: #729aff;
    font-size: 14px;
    padding: 5px 0 0;
    height: 77px;
}
.tab-quan .slogen{
    padding: 5px 15px;
}
.tab-quan .price-gongsi{
    padding: 8px 15px;
    height: 110px;
}
.tab-con .price-gongsi p{
    line-height:22px;
    color: #dfedff;
    margin: 0;
}
.tab-con .price-gongsi .price{
    font-size: 16px;
    color: #fff;
    margin-bottom: 2px;
}
.tab-item>a.active{
  border-bottom:3px solid #729aff;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.with-mode-fade-enter-active, .with-mode-fade-leave-active {
  transition: opacity .5s
}
.with-mode-fade-enter, .with-mode-fade-leave-active {
  opacity: 0
}

</style>
