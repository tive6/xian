/**
 * Created by badou on 2017/8/14.
 */
import Nav from './NavBar.vue'
// 这里是重点
const NavBtn = {
    install: function(Vue){
        Vue.component('NavBtn',Nav)
    }
};

// 导出组件
export default NavBtn