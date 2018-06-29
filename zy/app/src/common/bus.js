/**
 * Created by zmnaer on 2018/4/28.
 */
import Vue from 'vue'
const bus = new Vue()
//export default bus
export const Alert = function(ev,opts){
    bus.$emit(ev,opts)
}
export const Bus = bus