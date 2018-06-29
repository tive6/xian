/**
 * Created by zmnaer on 2018/5/14.
 */
import LoadingView from './Loading'

const loading = {
    install: function(Vue){
        Vue.component('loading', LoadingView)
    }
}

export default loading