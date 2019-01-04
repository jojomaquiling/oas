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
import Contacts from '@/components/Contacts.vue'
import CostCenters from '@/components/CostCenters.vue'
import ChartOfAccounts from '@/components/ChartOfAccounts.vue'

Vue.use(Plugin)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login.html',
      name: 'Login2',
      component: Login
    },
    {
      path: '/login',
      name: 'Login3',
      component: Login
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
      	path: 'index.html',
            components: {
                profile: Profile,
                realmenu:RealMenu,
                content:RealContent,
                menuheader:MenuHeader,
                titlepart:TitlePart,
            }},
		{
      	path: '',
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
		{
      	path: 'contacts',
            components: {
                profile: Profile,
                realmenu:RealMenu,
                content:Contacts,
                menuheader:MenuHeader,
            }},            
		{
      	path: 'costcenters',
            components: {
                profile: Profile,
                realmenu:RealMenu,
                content:CostCenters,
                menuheader:MenuHeader,
            }},            
		{
      	path: 'chartofaccounts',
            components: {
                profile: Profile,
                realmenu:RealMenu,
                content:ChartOfAccounts,
                menuheader:MenuHeader,
            }},            
  ]}
  ],
 mode: 'history',  
})


//router.replace({ path: '*', redirect: '/' })
export default router

