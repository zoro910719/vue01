import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);


const AppLoading={
    state:{
        nowStatus:"loading"
    },
    getters:{//获取  ，和 vue 的 computed 类似，可以计算 state 然后生成新的数据返回
        nowStatus:state=>{
            return state.nowStatus;
        }
    },
    mutations:{//修改  使用 $store.commit("方法名") 调用
        nowStatus(state,data){//state是默认的第一个参数，就是上边的state对象，第二个是可选参数
            state.nowStatus=data;
        }
    },
   actions:{//修改 使用 $store.dispatch("方法名") 调用
       nowStatus(context){ //context 和 $store 拥有相同的对象和方法
            context.commit("nowStatus"); //可以在这里 触发 mutaions 的方法
       }
   }
}

export default new Vuex.Store({
    modules:{
        AppLoading
    }
})


/*
$store.state.nowStatus  、 $store.getters.nowStatus 、$store.dispatch("nowStatus")
以上3种，可以通过   mapState 、mapGetters 、 mapActions  来简写
*/ 


/* ES6箭头函数
常规语法：
function funA(a){
    return a+1;
}
箭头函数：
var funA=(a)=>{return a+1}
如果只有一个参数，可以省略（）： var funA=a=>{return 1+1}
只有一个表达式，可以省略{} ： var funA = a=>return 1=1
return 也可以省略 ： var funA = a=>1-1
*/
