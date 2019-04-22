import Vue from "vue"
import App from "./app.vue"
const root = document.createElement("div")
document.body.appendChild(root)

import "./styles/stylus.styl"
import router from "./router.js"
new Vue({
    router,
    render:(h) => h(App)
}).$mount(root)
