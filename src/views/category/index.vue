
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
                        分类
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
                <div class="list-nav">
                    <ul>
                        <li class="active">新品</li>
                        <li>手机</li>
                        <li>电视</li>
                        <li>电脑</li>
                        <li>家电</li>
                        <li>家装</li>
                        <li>路由</li>
                        <li>智能</li>
                        <li>儿童</li>
                        <li>灯具</li>
                        <li>电源</li>
                        <li>耳机</li>
                        <li>音响</li>
                    </ul>
                </div>
                <div class="list-wrap">
                    <div class="list-item clear">
                        <div class="title"><span>--新品--</span></div>
                        <div class="group clear">
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                        </div>
                    </div>
                    <div class="list-item clear">
                        <div class="title"><span>--手机--</span></div>
                        <div class="group clear">
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                            <div class="group-item clear">
                                <img src="http://i8.mifile.cn/b2c-mimall-media/870f95a2aaca2bda576cf1d5d8b56934!120x120.png" />
                                <p class="name">小米6X</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'category',
    data(){
        return{}
    },
    mounted(){
        console.info("分类页加载");
    },
}
</script>

<style>

</style>


