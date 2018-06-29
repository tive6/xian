/**
 * Created by zm on 2017/8/14.
 */
import Pager from './Pagination.vue'

const Pagination = {
    install: function(Vue){
        Vue.component('Pagination',Pager)
    }
};
// 导出组件
export default Pagination