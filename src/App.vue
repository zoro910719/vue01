<template>
    <div>
        <div class="loading-bar" v-bind:class="nowStatus" > <!-- $store.getters.nowStatus 也可以这样写 -->
            <span class="press"></span>
        </div>

        <div class="app-init">
            <transition name="slide-fade">
                <router-view></router-view> 
            </transition>           
        </div>
        <div class="footer flex">
            <a v-on:click="open('/home')"  v-bind:class="{'active':isActive('home')}"><i class="iconfont icon-shouye"></i><span>首页</span></a>
            <a v-on:click="open('/category')" v-bind:class="{'active':isActive('category')}"><i class="iconfont icon-fenlei"></i><span>分类</span></a>
            <a v-on:click="open('/about')"><i class="iconfont icon-gouwuche"></i><span>购物车</span></a>
            <a v-on:click="open('/about')"><i class="iconfont icon-smile"></i><span>我的</span></a>
        </div>
    </div>
</template>

<script>
import Rem from './assets/js/rem'
import { mapGetters } from 'vuex' 

export default{
    name:'app',
    data(){  // 这是ES6的写法 
        return{
            nowUrl:''
        }
    },
    computed:{
        ...mapGetters([
            'nowStatus'            
        ])
    },
    mounted(){//防止页面刷新 nowUrl 丢失
        this.nowUrl=this.$router.currentRoute.path;//获取当前路由地址
        
        //console.info(this.$refs);//可获取子组件 or dom元素，需在元素上添加 ref 属性 
    },   
    watch:{//路由改变
        '$route'(to,from){            
            this.nowUrl=to.fullPath;
            // console.info(to.query);
        }
    },    
    methods: {
      open(link) {
        this.$router.openPage(link)
      },
      isActive(name){
          return this.nowUrl.indexOf(name)!=-1;
      }
    }

}

</script>

<style>
@import "./assets/css/public.css";
@import "./assets/font/iconfont.css";
</style>



