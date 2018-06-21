
import Vue from 'vue'
import VueRouter from 'vue-router'

// import home from '../views/home/index.vue'    //  home 、category 称为：路由组件 
// import category from '../views/category/index.vue'

Vue.use(VueRouter);


VueRouter.prototype.openPage=function(link,params){
    this.push({ 
        path: link, 
        //query: JSON.parse(params) //参数
    })
};

/*
    
*/
const router = new VueRouter({
    routes:[
        {
            path:'',   //  or  '/' 这样是默认的路由
            redirect:'/home'
        },
        {
            path:'/home',
            //component:home  //不这样写了
            component(resolve){ //懒加载  // 另一种写法 component:resolve=> require(['@/views/home/index.vue'],resolve)
                require(['@/views/home/index.vue'],resolve)
            },
            children:[//路由嵌套 
                {
                    name:'body1', 
                    path:'',// 默认的路由
                    component:resolve=> require(['@/views/home/body1.vue'],resolve)
                },
                {
                    name:'body1', 
                    path:'body1',
                    component:resolve=> require(['@/views/home/body1.vue'],resolve)
                },
                {
                    name:'body2', 
                    path:'body2',
                    component:resolve=> require(['@/views/home/body2.vue'],resolve)
                },
                {
                    name:'body3', 
                    path:'body3',
                    component:resolve=> require(['@/views/home/body2.vue'],resolve)
                },
                {
                    name:'body4', 
                    path:'body4',
                    component:resolve=> require(['@/views/home/body2.vue'],resolve)
                },
                {
                    name:'body5', 
                    path:'body5',
                    component:resolve=> require(['@/views/home/body2.vue'],resolve)
                },
                {
                    name:'body6', 
                    path:'body6',
                    component:resolve=> require(['@/views/home/body2.vue'],resolve)
                },
                {
                    name:'body7', 
                    path:'body7',
                    component:resolve=> require(['@/views/home/body2.vue'],resolve)
                },
                {
                    name:'body8', 
                    path:'body8',
                    component:resolve=> require(['@/views/home/body2.vue'],resolve)
                }
            ]
        },
        {
            path:'/category',
            // component:category
            component(resolve){
                require(['@/views/category/index.vue'],resolve)
            }
        },
        {
            path:'/about',
            component:resolve=>require(['@/views/about/index.vue'],resolve)
        }
    ]
    
});

export default router

//也可以这样写
// export default new VueRouter({
//    routes:[
//        {
//            path:'/',
//            redirect:'/home'
//        },
//        {
//            path:'/home',
//            component:home
//        },
//        {
//            path:'/category',
//            component:category
//        }
//    ]
// })

