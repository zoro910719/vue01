<template>
    
    <!-- 幻灯片 start -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list">
                <a v-bind:href="item.href">
                    <img v-bind:src="item.src" />
                </a>
                
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
    <!-- 幻灯片 end -->

</template>

<script>
import Swiper from '../assets/js/swiper/swiper.min'

var myswiper=null;

export default {
    props:{
       list:{
           type:Array,
           default:function(){
               return []
           }
       }
    },
    mounted(){
        myswiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            }, 
        }); 
    }
}
</script>

<style>
@import '../assets/js/swiper/swiper.min.css'
</style>


