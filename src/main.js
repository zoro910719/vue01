// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //引入App.vue
import router from './router' //路由  （router 就是 router/index.js 里 输出的 export default router）
import store from './store' // vuex  (状态管理)


//导航守卫 :路由发生改变
//全局 路由跳转前方法  to:目标路由对象  from:当前导航正要离开的路由  next: next() 一定要执行的
router.beforeEach((to,from,next)=>{ 
    store.commit("nowStatus","loading");
    next();//这里这句话一定要写的，否则不会跳转的
    //next(); 可以传参数的  next(false)//阻止跳转
})

router.afterEach((to,from)=>{
    store.commit("nowStatus","end");
    setTimeout(() => {
      store.commit("nowStatus","hide");
    }, 500);

    setTimeout(() => {
      store.commit("nowStatus","normal");
    }, 1000);
    
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

