import Vue from 'vue'
import Router from 'vue-router'
import { Plugin } from 'vue-fragment'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Coins from '@/components/Coins.vue'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import DashboardReal from '@/components/DashboardReal.vue'
import Profile from '@/components/Profile.vue'
import RealMenu from '@/components/RealMenu.vue'
import RealContent from '@/components/RealContent.vue'
import RealHeader from '@/components/RealHeader.vue'
import MenuHeader from '@/components/MenuHeader.vue'
import TitlePart from '@/components/TitlePart.vue'
import Sample1 from '@/components/Sample1.vue'

Vue.use(Plugin)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/fakedashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'DashboardReal',
      component: DashboardReal,
      children: [{
      	path: 'dashboard',
            components: {
                profile: Profile,
                realmenu:RealMenu,
                content:RealContent,
                menuheader:MenuHeader,
                titlepart:TitlePart,
            }},
		{
      	path: 'sample1',
            components: {
                profile: Profile,
                realmenu:RealMenu,
                content:Sample1,
                menuheader:MenuHeader,
            }},            
            
            
			],
        },    
  ]
})
