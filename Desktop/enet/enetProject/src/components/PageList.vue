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
            </el-breadcrumb>
            <div class="result">
                关键字<span class="keyword">“一体化办公”</span>搜索结果如下：
                <span class="result-num">共<em>69</em>条结果</span>
            </div>
            <div class="filter">
                <div class="assort line">
                    <div class="filter-l">产品分类</div>
                    <div class="filter-r">
                        <div :style="{'padding-bottom':'10px'}">
                            <span v-for="(item,index) in filterlist" :key="index" @click="addcon(index,null)" class="fil-nav" :class="{active:item.show}">{{item.label}}</span>
                        </div>
                        <div v-for="(citem,cindex) in filterlist" :key="cindex" v-show="citem.show" class="line" :style="{'padding-top':'10px'}">
                            <span class="fil-nav" :class="{active:ccitem.show}" v-for="(ccitem,ccindex) in citem.children" :key="ccindex" @click="addcon(cindex,ccindex)">{{ccitem.label}}</span>
                        </div>
                    </div>
                </div>
                <div class="tags line">
                    <div class="filter-l">产品标签</div>
                    <div class="filter-r">
                        <div v-for="(tag,index) in filterlist" :key="index" v-show="tag.show">
                            <span class="fil-nav" :class="{active:ctag.show}" @click="addtag(index,cindex)" v-for="(ctag,cindex) in tag.tag" :key="cindex">{{ctag.label}}</span>
                        </div>
                    </div>
                </div>
                <div class="deliver-operate line">
                    <select v-model="deliver">
                        <option disabled value="">交付方式</option>
                        <option>交付1</option>
                        <option>交付2</option>
                        <option>交付3</option>
                    </select>
                    <select v-model="operate">
                        <option disabled value="">操作系统</option>
                        <option>系统1</option>
                        <option>系统2</option>
                        <option>系统3</option>
                    </select>
                </div>
                <div class="conditions line">
                    <div class="filter-l">筛选结果</div>
                    <div class="filter-r">
                        <span class="fil-data">云平台<i>|</i>x</span>
                        <span class="fil-data">私有云<i>|</i>x</span>
                        <span class="fil-data">标签1<i>|</i>x</span>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="sort">
                    <span class="default-sort">默认排序</span>
                    <span class="star-sort">星级</span>
                    <span class="read-sort">浏览量</span>
                </div>
                <div class="list-item" v-for="(item,index) in prolist" :key="index">
                    <div class="pro-img"><img :src="item.img" alt=""></div>
                    <div class="pro-info">
                        <div class="pro-top">
                            <div class="info-l">
                                <h3>{{item.tit}}</h3>
                                <h4>{{item.gs}}</h4>
                                <p class="intro">{{item.intro}}</p>
                                <p><span>交付方式：{{item.deliver}}</span><span>操作系统：{{item.operate}}</span></p>
                            </div>
                            <div class="info-r">
                                <p>参考价格：<span class="price">{{item.price}}</span></p>
                                <p>产品星级：<el-rate class="star" v-model="item.star" disabled show-score text-color="#ff9900" score-template=""></el-rate></p>
                                <p>查看人数：<span class="read">{{item.read}}</span></p>
                            </div>
                        </div>
                        <div class="pro-tag">
                            <span v-for="(citem,cindex) in item.tag" :key="cindex">{{citem}}</span>
                        </div>
                    </div>
                </div>
                <div class="pages">
                    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
            </div>
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
var pro1 = require('../assets/饱和OA饱和OA.jpg');
var pro2 = require('../assets/超级棒OA.jpg');
var pro3 = require('../assets/硅谷云OA.jpg');
var pro4 = require('../assets/45.jpg');
var pro5 = require('../assets/饱和OA.jpg');
var pro6 = require('../assets/饱和OA饱和OA.jpg');
var pro7 = require('../assets/饱和OA.jpg');
export default {
    name: 'listpage',
    components: {topbar, logosearch, menunav, footbar},
    methods: {
        addcon (index, cindex) {
            for (var i = 0; i < this.filterlist.length; i++) {
                this.filterlist[i].show = false;
                this.filterlist[index].show = true;
                for (var j = 0; j < this.filterlist[i].children.length; j++) {
                    this.filterlist[i].children[j].show = false;
                    if (cindex !== null) {
                        this.filterlist[index].children[cindex].show = true;
                    }
                }
                for (var k = 0; k < this.filterlist[i].tag.length; k++) {
                    this.filterlist[i].tag[k].show = false;
                }
            }
        },
        addtag (index, cindex) {
            for (var i = 0; i < this.filterlist.length; i++) {
                for (var j = 0; j < this.filterlist[i].tag.length; j++) {
                    this.filterlist[i].tag[j].show = false;
                    this.filterlist[index].tag[cindex].show = true;
                }
            }
        }
    },
    data () {
        return {
            value5: 3,
            deliver: '',
            operate: '',
            conditions: [],
            filterlist: [
                {
                    id: '',
                    label: '全部',
                    pid: '',
                    children: [
                        // {id: '1', label: '云平台', pid: '0', show: false},
                        // {id: '2', label: '技术开发', pid: '0', show: false},
                        // {id: '3', label: '办公应用', pid: '0', show: false},
                        // {id: '4', label: '生产/供应管理', pid: '0', show: false},
                        // {id: '5', label: '财务管理', pid: '0', show: false},
                        // {id: '6', label: '人事管理', pid: '0', show: false},
                        // {id: '7', label: '销售管理', pid: '0', show: false},
                        // {id: '8', label: '营销/客服', pid: '0', show: false},
                        // {id: '9', label: 'API服务', pid: '0', show: false},
                        {id: '16', label: '公有云', pid: '1', show: false},
                        {id: '17', label: '私有云', pid: '1', show: false},
                        {id: '18', label: '网络专线', pid: '1', show: false},
                        {id: '19', label: 'CDN加速', pid: '1', show: false},
                        {id: '20', label: '容器服务', pid: '1', show: false},
                        {id: '21', label: '对象存储COS', pid: '1', show: false},
                        {id: '22', label: '域名服务', pid: '1', show: false},
                        {id: '23', label: '弹性高性能计算', pid: '1', show: false},
                        {id: '24', label: '平台迁移', pid: '1', show: false},
                        {id: '25', label: '安全服务', pid: '1', show: false},
                        {id: '26', label: '基础软件', pid: '2', show: false},
                        {id: '27', label: '网站建设', pid: '2', show: false},
                        {id: '28', label: 'H5开发', pid: '2', show: false},
                        {id: '29', label: 'APP开发', pid: '2', show: false},
                        {id: '30', label: '微信开发', pid: '2', show: false},
                        {id: '31', label: '维护测试', pid: '2', show: false},
                        {id: '32', label: 'OA', pid: '3', show: false},
                        {id: '33', label: '邮箱', pid: '3', show: false},
                        {id: '34', label: '视频会议', pid: '3', show: false},
                        {id: '35', label: '项目管理', pid: '3', show: false},
                        {id: '36', label: '安防监控', pid: '3', show: false},
                        {id: '37', label: '商业智能分析', pid: '3', show: false},
                        {id: '38', label: 'ERP', pid: '4', show: false},
                        {id: '39', label: 'MES', pid: '4', show: false},
                        {id: '40', label: '财务', pid: '5', show: false},
                        {id: '41', label: '人事管理', pid: '6', show: false},
                        {id: '42', label: '招聘', pid: '6', show: false},
                        {id: '43', label: 'CRM', pid: '7', show: false},
                        {id: '44', label: '广告营销', pid: '8', show: false},
                        {id: '45', label: '媒体服务', pid: '8', show: false},
                        {id: '46', label: '呼叫中心', pid: '8', show: false},
                        {id: '47', label: '电子商务', pid: '9', show: false},
                        {id: '48', label: '人工智能', pid: '9', show: false},
                        {id: '49', label: '金融理财', pid: '9', show: false},
                        {id: '50', label: '交通地理', pid: '9', show: false},
                        {id: '51', label: '企业管理', pid: '9', show: false},
                        {id: '52', label: '公共事务', pid: '9', show: false},
                        {id: '53', label: '气象水利', pid: '9', show: false},
                        {id: '54', label: '生活服务', pid: '9', show: false}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签4', show: false},
                        {label: '标签1', show: false},
                        {label: '标签3', show: false},
                        {label: '标签2', show: false},
                        {label: '标签5', show: false},
                        {label: '标签4', show: false},
                        {label: '标签1', show: false},
                        {label: '标签3', show: false},
                        {label: '标签2', show: false},
                        {label: '标签5', show: false},
                        {label: '标签4', show: false},
                        {label: '标签1', show: false},
                        {label: '标签3', show: false},
                        {label: '标签2', show: false},
                        {label: '标签5', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: true
                },
                {
                    id: 1,
                    label: '云平台',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 16, label: '公有云', pid: 1, show: false, children: []},
                        {id: 17, label: '私有云', pid: 1, show: false, children: []},
                        {id: 18, label: '网络专线', pid: 1, show: false, children: []},
                        {id: 19, label: 'CDN加速', pid: 1, show: false, children: []},
                        {id: 20, label: '容器服务', pid: 1, show: false, children: []},
                        {id: 21, label: '对象存储COS', pid: 1, show: false, children: []},
                        {id: 22, label: '域名服务', pid: 1, show: false, children: []},
                        {id: 23, label: '弹性高性能计算', pid: 1, show: false, children: []},
                        {id: 24, label: '平台迁移', pid: 1, show: false, children: []},
                        {id: 25, label: '安全服务', pid: 1, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签1', show: false},
                        {label: '标签4', show: false},
                        {label: '标签3', show: false},
                        {label: '标签5', show: false},
                        {label: '标签2', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 2,
                    label: '技术开发',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 26, label: '基础软件', pid: 2, show: false, children: []},
                        {id: 27, label: '网站建设', pid: 2, show: false, children: []},
                        {id: 28, label: 'H5开发', pid: 2, show: false, children: []},
                        {id: 29, label: 'APP开发', pid: 2, show: false, children: []},
                        {id: 30, label: '微信开发', pid: 2, show: false, children: []},
                        {id: 31, label: '维护测试', pid: 2, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签2', show: false},
                        {label: '标签1', show: false},
                        {label: '标签4', show: false},
                        {label: '标签5', show: false},
                        {label: '标签3', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 3,
                    label: '办公应用',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 32, label: 'OA', pid: 3, show: false, children: []},
                        {id: 33, label: '邮箱', pid: 3, show: false, children: []},
                        {id: 34, label: '视频会议', pid: 3, show: false, children: []},
                        {id: 35, label: '项目管理', pid: 3, show: false, children: []},
                        {id: 36, label: '安防监控', pid: 3, show: false, children: []},
                        {id: 37, label: '商业智能分析', pid: 3, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签5', show: false},
                        {label: '标签2', show: false},
                        {label: '标签3', show: false},
                        {label: '标签4', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 4,
                    label: '生产/供应管理',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 38, label: 'ERP', pid: 4, show: false, children: []},
                        {id: 39, label: 'MES', pid: 4, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签3', show: false},
                        {label: '标签2', show: false},
                        {label: '标签1', show: false},
                        {label: '标签5', show: false},
                        {label: '标签4', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 5,
                    label: '财务管理',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 40, label: '财务', pid: 5, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签2', show: false},
                        {label: '标签1', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 6,
                    label: '人事管理',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 41, label: '人事管理', pid: 6, show: false, children: []},
                        {id: 42, label: '招聘', pid: 6, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签1', show: false},
                        {label: '标签2', show: false},
                        {label: '标签4', show: false},
                        {label: '标签3', show: false},
                        {label: '标签5', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 7,
                    label: '销售管理',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 43, label: 'CRM', pid: 7, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签3', show: false},
                        {label: '标签4', show: false},
                        {label: '标签5', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 8,
                    label: '营销/客服',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 44, label: '广告营销', pid: 8, show: false, children: []},
                        {id: 45, label: '媒体服务', pid: 8, show: false, children: []},
                        {id: 46, label: '呼叫中心', pid: 8, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                },
                {
                    id: 9,
                    label: 'API服务',
                    pid: 0,
                    children: [
                        {id: '', label: '全部', pid: '', show: false, children: []},
                        {id: 47, label: '电子商务', pid: 9, show: false, children: []},
                        {id: 48, label: '人工智能', pid: 9, show: false, children: []},
                        {id: 49, label: '金融理财', pid: 9, show: false, children: []},
                        {id: 50, label: '交通地理', pid: 9, show: false, children: []},
                        {id: 51, label: '企业管理', pid: 9, show: false, children: []},
                        {id: 52, label: '公共事务', pid: 9, show: false, children: []},
                        {id: 53, label: '气象水利', pid: 9, show: false, children: []},
                        {id: 54, label: '生活服务', pid: 9, show: false, children: []}
                    ],
                    tag: [
                        {label: '全部', show: false},
                        {label: '标签3', show: false},
                        {label: '标签1', show: false},
                        {label: '标签4', show: false},
                        {label: '标签2', show: false},
                        {label: '标签5', show: false},
                        {label: '标签6', show: false}
                    ],
                    show: false
                }
            ],
            prolist: [
                {tit: '产品名字', gs: '服务商名称', intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 3.5, read: 33, img: pro1, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']},
                {tit: '产品名字', gs: '服务商名称', intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 5, read: 33, img: pro3, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']},
                {tit: '产品名字', gs: '服务商名称', intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 3.5, read: 33, img: pro7, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']},
                {tit: '产品名字', gs: '服务商名称', intro: '品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 4.5, read: 33, img: pro6, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']},
                {tit: '产品名字', gs: '服务商名称', intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 1, read: 333, img: pro4, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']},
                {tit: '产品名字', gs: '服务商名称', intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 2, read: 33, img: pro5, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']},
                {tit: '产品名字', gs: '服务商名称', intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 1, read: 33, img: pro3, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']},
                {tit: '产品名字', gs: '服务商名称', intro: '产品简介产品简介产品简介产品简产品简介产品简介产品简介产品简介介产品简介产品简介产品简介产品简介产品', deliver: '交付方式', operate: '操作系统', price: '￥3780/年', star: 3.5, read: 33, img: pro2, tag: ['标签一', '标签二', '标签三', '标签四', '标签五']}
            ]

        };
    }
};
</script>
<style scoped>
    .wrap-gray{
        overflow: hidden;
    }
    .result{
        height: 50px;
        line-height: 50px;
        color: #333;
        font-size: 14px;
        background: #fff;
        border-left: 4px solid #729aff;
        margin-bottom: 15px;
        padding: 0 30px 0 10px;
    }
    .keyword{
        color: #729aff;
        margin: 0 10px;
    }
    .result-num{
        float: right;
        color: #999;
    }
    .result-num em{
        font-style: normal;
        color: #333;
    }
    .filter{
        background: #fff;
        margin-bottom: 10px;
    }
    .filter,.filter a,.fil-nav{
        color: #333;
        font-size: 14px;
        transition: all 0.2s;
    }
    .filter a:hover,.filter a:active,.filter a.active,.fil-nav:hover,.fil-nav.active{
        color: #729aff;
    }
    .assort,.tags,.deliver-operate,.conditions{
        line-height: 30px;
        padding: 10px 20px;
        overflow: hidden;
    }
    .line{
        border-top: 1px solid #d9dde7;
    }
    select {
        border: none;
        color: #333;
    }
    select:focus {
        outline: none;
    }
    option {
        min-height: 1.5em;
        padding: 0px 2px 1px;
    }
    .filter-l{
        float: left;
        width: 8%;
    }
    .filter-r{
        float: left;
        width: 92%;
    }
    .fil-nav{
        margin-right: 25px;
        cursor: pointer;
        display: inline-block;
    }
    .fil-data{
        background: #729aff;
        padding: 0 10px;
        color: #fff;
        display: block;
        float: left;
        cursor: pointer;
        margin-right: 40px;

    }
    .fil-data i{
        font-style: normal;
        display: inline-block;
        margin: 0 10px;
    }
    .list{
        background: #fff;
        padding-bottom: 135px;
    }
    .sort{
        overflow: hidden;
        line-height: 30px;
        padding: 10px 20px;
        border-bottom: 1px solid #d9dde7;
        background: #fff;
    }
    .default-sort,.star-sort,.read-sort{
        float: left;
        display: block;
        margin-right: 40px;
        padding: 0 10px;
        cursor: pointer;
    }
    .star-sort,.read-sort{
        background: url('../assets/sort.png') no-repeat right center;
    }
    .list-item{
        color: #666;
        font-size: 14px;
        overflow: hidden;
        padding: 30px 0 5px;
        margin: 0 30px;
        border-bottom: 1px solid #d9dde7;
    }
    .pro-img,.pro-info,.info-l,.info-r{
        float: left;
    }
    .pro-img{
        width: 135px;
        height: 135px;
        margin-right: 30px;
        text-align: center;
        overflow: hidden;
    }
    .pro-img img{
        display: block;
        width: 100%;
    }
    h3{
        line-height: 1;
        font-size: 18px;
        color: #333;
        margin: 0 0 15px;
    }
    h4{
        line-height: 1;
        font-size: 16px;
        color: #666;
        margin: 0 0 15px;
    }
    .list-item p{
        margin: 0 0 8px;
    }
    .pro-top{
        overflow: hidden;
        border-bottom: 1px solid #d9dde7;
    }
    .info-l{
        width: 710px;
    }
    .info-l span{
        margin-right: 50px;
    }
    .intro{
        width: 80%;
        text-align: justify;
    }
    .info-r{
        width: 205px;
    }
    .info-r p{
        color: #666;
        font-size: 16px;
    }
    .info-r .price{
        color: #ff8149;
    }
    .info-r .read{
        color: #729aff;
        font-size: 14px;
    }
    .pro-tag{
        padding: 10px 0;
        overflow: hidden;
    }
    .pro-tag span{
        display: block;
        float: left;
        margin-right: 20px;
        line-height: 24px;
        padding: 0 5px;
        border: 1px solid #fff;
        cursor: pointer;
        transition: all 0.2s;
    }
    .pro-tag span:hover{
        color: #729aff;
        border: 1px solid #729aff;
    }
    .star.el-rate{
        display: inline-block;
    }
    .pages{
        text-align: center;
        margin-top: 50px;
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
