<template>
<!-- 四个案例 -->
<div class="wrap-gray">
    <el-row type="flex" class="banxin">
        <el-col :span="6" v-for='(item,index) in anlist' :key="index" :style="{background:'url('+item.imgurl+') no-repeat 85% bottom','background-size':135}">
            <div class="grid-content anli">
                <div class="anli-con">
                    <a :href="item.link" target="_blank" v-html="item.title"></a>
                    <p>{{item.info}}</p>
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
var zhu = require('../assets/zhu.jpg');
var ren = require('../assets/zhu.jpg');
var yun = require('../assets/zhu.jpg');
export default {
    name: 'anli',
    data () {
        return {
            anlist: [
                {title: '2017数字营销经典案例', link: '', imgurl: zhu, info: '汇集业内80多家顶尖企业的经典营销，供您参考和借鉴'},
                {title: '踏上新征程的新零售黑马', link: '', imgurl: ren, info: '新零售是什么？它新在哪？究竟是趋势还是噱头？'},
                {title: '重塑云计算商业文明<span>HOT</span>', link: '', imgurl: yun, info: '从用户需求出发，靠技术创新驱动，用服务建立口碑'},
                {title: '2017数字营销经典案', link: '', imgurl: zhu, info: '汇集业内80多家顶尖企业的经典营销，供您参考和借鉴'}
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.anli-con{
  padding: 20px;
}
.banxin{
  overflow: hidden;
  margin-bottom: 45px;
}
.anli{
  border-left: 1px solid #dedede;
  margin-left: -1px;
}
.anli,.anli .anli-con,.anli a{
  transition:  all 0.2s;
  cursor: pointer;
}
.anli a{
  color: #292929;
  font-size: 18px;
  margin: 5px 0 0;
  display: inline-block;
}
.anli a:after{
  content: '';
  width: 32px;
  height: 3px;
  background: #5782ff;
  display: block;
  clear: both;
  margin-top: 10px;
}
.anli a span{
  color: #ff953f;
  font-size: 14px;
  border: 1px solid #ff953f;
  border-radius: 3px;
  display: inline-block;
  padding: 1px 2px;
  margin-left: 2px;
}
.anli:hover .anli-con{
  background: rgba(200,210,220,0.3);
}
.anli a:hover,.anli:hover a{
  color: #729aff;
}
.anli:hover a span,.anli a:hover span{
  color: #ff953f;
}
.anli p{
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
</style>
