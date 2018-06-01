/**
 * Created by zmnaer on 2018/5/14.
 */
import * as types from './types'

export default {
    showNav:({commit})=>{
        commit(types.NAVSHOW)
    },
    hideNav:({commit})=>{
        commit(types.NAVHIDE)
    },
    showLoading:({commit})=>{
        commit(types.LOADINGSHOW)
    },
    hideLoading:({commit})=>{
        commit(types.LOADINGHIDE)
    },
    isLogin:({commit})=>{
        commit(types.SETLOGIN)
    },
    notLogin:({commit})=>{
        commit(types.SETLOGOUT)
    }
}