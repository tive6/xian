/**
 * Created by zmnaer on 2018/5/14.
 */
import {
    NAVSHOW,
    NAVHIDE,
    LOADINGSHOW,
    LOADINGHIDE,
    SETLOGIN,
    SETLOGOUT
} from './types'
import getters from './getters'

const state = {
    navBar: true,
    hasLoading: false,
    loginStatus: false
}

const mutations = {
    [NAVSHOW](state){
        state.navBar = true
    },
    [NAVHIDE](state){
        state.navBar = false
    },
    [LOADINGSHOW](state){
        state.hasLoading = true
    },
    [LOADINGHIDE](state){
        state.hasLoading = false
    },
    [SETLOGIN](state){
        state.loginStatus = true
    },
    [SETLOGOUT](state){
        state.loginStatus = false
    }
}

export default {
    state,
    mutations,
    getters
}