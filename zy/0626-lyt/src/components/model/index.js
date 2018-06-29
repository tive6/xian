/**
 * Created by lenovo on 2018/4/27.
 */
import ModelView from './Model'

const model = {
    install: function(Vue){
        Vue.component('model', ModelView)
    }
}

export default model