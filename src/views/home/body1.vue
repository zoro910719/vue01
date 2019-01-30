
<template>
    <div class="bodys">
                    <!-- 幻灯片 start -->
                    <swiper v-bind:list="bannerList01"></swiper>
                    <!-- 幻灯片 end -->

                    <div class="cell-box">
                        <a href="#"><img src="http://i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp" /></a>
                        <a href="#"><img src="http://i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp" /></a>
                        <a href="#"><img src="../../assets/images/cell-3.jpg" /></a>
                        <a href="#"><img src="http://i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp" /></a>
                        <a href="#"><img src="../../assets/images/cell-5.png" /></a>
                    </div>

                    <div class="shop-item clear">
                        <img class="fl half" src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e05bf36fa50a26264e0307f74351e27.jpg?thumb=1&w=358&h=508" />
                        <img class="fr half" style="margin-bottom:0.05rem;" src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/04e0136baa0b83859e6cc2e997a9a8eb.jpg?thumb=1&w=358&h=252" />
                        <img class="fr half" src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/22fb1734aa79d4ae26e92f63bf14ada3.jpg?thumb=1&w=358&h=252" />
                    </div>
                    <div class="shop-item clear">
                        <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/584bd444fbb7bde464107eb4dbe2e17a.jpg?thumb=1&w=720&h=280" />
                    </div>
                    <div class="shop-item clear">
                        <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e178243c163f2716d4abd7be82773649.jpg?thumb=1&w=720&h=440" />
                    </div>
                    <div class="shop-item clear">
                        <div class="shop-item-box clear" v-for="item in productList">
                            <img v-bind:src="item.img_url" />
                            <div class="info">
                                <p class="name">{{item.name}}</p>
                                <p class="brief">{{item.brief}}</p>
                                <p class="price">{{item.price}}</p>
                            </div>
                        </div>

                    </div>
                </div>
</template>

<script>
import swiper from '@/components/swiper'
import axios from 'axios' // 用于向服务端发送请求（vue-resource 是vue2.0之前的，停止更新了，推荐使用axios）
import qs from 'qs'

export default {
    data(){
        return{
            bannerList01:[
                {
                    src: require('@/assets/images/1.jpg'), //"/assets/images/1.jpg", //Webpack,把图片当作 资源，而非路径处理 
                    href:""
                },
                 {
                    src: require('@/assets/images/2.jpg'), //"/assets/images/2.jpg",
                    href:""
                }
            ],
            productList:[]
        }
    },
     components:{//引入swiper组件
        swiper //这是 ES6的写法，键值对重名 的情况 swiper:swiper
    }, 
    mounted(){
        console.info("首页body1 加载");

        this.getProductList();

        this.test();//可跨域,直接修改config/index.js的proxyTable
    },
    methods:{
        getProductList(){
            axios.get("./static/server/list.json")
            // .then(function(response){
            //     console.info(response);
            //     this.productList=response.data;
            // })
            .then(response=>{  //用箭头函数， 不改变 this 的指向
                //console.info(response);
                this.productList=response.data;
            })
            .catch(error=>{
                console.info(error);
            })
        },
        test(){
            axios.get("/api/api/course/GetTest?user_id=&course_id=1+2")
            .then(response=>{
                console.info(response);
            }).catch(error=>{

            })
        },
    },
}
</script>

<style>

</style>


