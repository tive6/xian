/**
 * Created by zmnaer on 2018/5/14.
 */
export default {
    navShow:(state)=>{
        return state.navBar
    },
    loadingShow:(state)=>{
        return state.hasLoading
    },
    getLoginStatus:(state)=>{
        return state.loginStatus
    }
}