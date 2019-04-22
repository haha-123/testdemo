import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Home from "./routers/home.vue"
import Bar from "./routers/bar.vue"
import Rt01 from "./rt/rt01.vue"
import Rt02 from "./rt/rt02.vue"

const routes = [
    {
        path:"/home/:id",
        component:Home,
        name:"home",
    },
    {
        path:"/bar",
        component:Bar,
        name:"bar",
        children:[
            {
                path:"/rt01",
                component:Rt01
            },
            {
                path:"/rt02",
                component:Rt02
            }
        ]
    }
]

const router = new VueRouter({
    routes,
})
export default router
