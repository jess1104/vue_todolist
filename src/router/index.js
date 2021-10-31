import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/all",
        name: "All",
        component: Home,
    },
    {
        path: "/active",
        name: "Active",
        component: Home,
    },
    {
        path: "/done",
        name: "Done",
        component: Home,
    },
]

const router = new VueRouter({
    routes,
})

export default router