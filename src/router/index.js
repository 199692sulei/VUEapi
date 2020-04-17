import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import stuList from "../views/stuList.vue"
import addStu from "../views/addStu.vue"

const routes = [{
  path: "/stulist",
  component: stuList
}, {
  path: "/addstu",
  component: addStu
}, {
  path: "*",
  redirect:"/stulist"
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
})

export default router