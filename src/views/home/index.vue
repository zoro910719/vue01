<template>
   
   <div class="app-init home">
            <header class="header">
                <div class="app-header-wrapper">
                    <div class="app-header-left">
                        <div class="app-header-item logo">
                            <img src="@/assets/images/logo.png" />
                        </div>
                    </div>
                    <div class="app-header-middle">
                        <div class="app-header-title flex home-title"  v-on:click="$router.openPage('/about')">
                            <i class="icon-search"></i>
                            搜索商品名称
                        </div>
                    </div>
                    <div class="app-header-right">
                        <div class="app-header-item" v-on:click="$router.openPage('/about')">
                            <i class="iconfont icon-smile user-center"></i>
                        </div>
                    </div>
                </div>
                <div class="nav">
                    <template v-for="(item,index) in bodyList" >
                        <div class="nav-item" v-bind:class="{'active':navActive(item.path)}" v-on:click="navChange(item.path)">
                             <!-- <router-link :to="{path:item.path}" tag="li" ><span>{{item.navName}}</span></router-link> -->   
                             <span>{{item.navName}}</span>                         
                         </div>
                    </template>
                </div>
            </header>

            <div class="page-wrap"> 
                <router-view></router-view> <!-- 这里是嵌套路由，在当前 index.vue 里的 -->
            </div>
    </div>


</template>

<script>

var model={
    name:'homepage',
    data(){
        return {
            nowNavUrl:"",
            bodyList:[],            
        }
    },
    components:{//引入组件       
       
    }, 
    mounted(){
        console.info("首页加载");
        this.nowNavUrl=this.$router.currentRoute.path;//获取当前路由地址
        this.bodyList=[
            { navName:"推荐",path:"/home"}, //默认首页home
            { navName:"手机",path:"/home/body2"},
            { navName:"智能",path:"/home/body3"},
            { navName:"电视",path:"/home/body4"},
            { navName:"电脑",path:"/home/body5"},
            { navName:"全面屏",path:"/home/body6"},
            { navName:"盒子",path:"/home/body7"},
            { navName:"生活周边",path:"/home/body8"},
        ];
    },
    watch:{//路由改变
        '$route'(to,from){
            this.nowNavUrl=to.fullPath;
        }
    },    
    // beforeRouteLeave(to,from,next){  // 路由组件中 才起作用 （当前组件index.vue 被 用在了 路由定义中）
    //     console.info(to);
    //     next();
    // },
    methods:{
        navActive:function(path){
             return this.nowNavUrl==path;
        },
        navChange:function(path){
            this.$router.openPage(path);
        }
    },
};

export default model
</script>
<style>

</style>



