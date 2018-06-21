
<template>
    <div class="app-init category">
        <header class="header">
            <div class="app-header-wrapper">
                <div class="app-header-left">
                    <div class="app-header-item">
                        <a href="#" v-on:click="$router.go(-1)">
                            <i class="iconfont icon-backer"></i>
                        </a>                        
                    </div>
                </div>
                <div class="app-header-middle">
                    <div class="app-header-title">
                        关于
                    </div>
                </div>
                <div class="app-header-right">
                    <div class="app-header-item">
                        <i class="icon-search"></i>
                    </div>
                </div>
            </div>
        </header>

        <div class="main-wrap">
            <div class="main-body">
                <p>vue-cli</p>
                <p>vue v2.9.3</p>
                <p>vue-router v3.0.1</p>
                <p>vuex v3.0.1</p>
                <p>axios v0.18.0</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'about',
    data(){
        return{}
    }
}
</script>

<style>
.main-body{padding:0.5rem 0.5rem;}
.main-body p{text-align:left;line-height: 0.8rem;}
</style>


