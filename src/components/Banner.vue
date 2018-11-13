<template>
<!-- 轮播图banner -->
<div class="block">
    <el-carousel height="360px">
        <el-carousel-item v-for="(item,index) in carousellist" :key="index">
            <a :href="item.link" target="_blank" :style="{background:'url('+item.imgurl+') no-repeat center'}"></a>
        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
var lunbo01 = require('../assets/lunbo01.jpg');
var lunbo02 = require('../assets/lunbo02.jpg');
var lunbo03 = require('../assets/lunbo03.jpg');
var lunbo04 = require('../assets/lunbo04.jpg');
var lunbo05 = require('../assets/lunbo05.jpg');
export default {
    name: 'menunav',
    data () {
        return {
            carousellist: [
                {imgurl: lunbo01, link: 'http://www.baidu.com'},
                {imgurl: lunbo02, link: 'http://www.baidu.com'},
                {imgurl: lunbo03, link: 'http://www.baidu.com'},
                {imgurl: lunbo04, link: 'http://www.baidu.com'},
                {imgurl: lunbo05, link: 'http://www.baidu.com'}
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item{
  text-align: center;
}
.el-carousel__item a{
  display: inline-block;
  max-width: 1920px;
  min-width: 1200px;
  width: 100%;
  height: 100%;
}
.el-carousel__button{
  width: 26px;
  height: 5px;
  border-radius: 5px;
}
</style>
