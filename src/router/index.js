import Vue from 'vue'
import VueRouter from 'vue-router'
import PotMenu from '../components/PotMenu'
import PotHomeScreen from '../components/PotHomeScreen'
import PotSignup from '../components/PotSignup'
import PotInfo from '../components/PotInfo'
import PotLogin from '../components/PotLogin'
import PotSearch from '../components/PotSearch'
import PotCreate from '../components/PotCreate'
import PotPost from '../components/PotPost'

Vue.use(VueRouter)

const routes = [
  {path : '/info', component: PotInfo },
  {path : '/potmenu', component: PotMenu },
  {path : '/pothomescreen', component : PotHomeScreen},
  {path : '/potsearch', component : PotSearch},
  {path : '/potpost', component : PotPost},
  {path : '/potcreate', component : PotCreate},
  {path : '/signup', name: 'signup', component :  PotSignup},
  {path : '/login', name: 'login', component :  PotLogin},
  {path : '/', component :  PotInfo},
  {path : '*', component : PotInfo},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
