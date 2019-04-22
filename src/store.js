import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:111
    },
    mutations:{
        addCount(){
            this.state.count++
        }
    },
    actions:{

    }
})