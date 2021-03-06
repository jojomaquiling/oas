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
import Dashboard2 from '@/components/Dashboard2.vue'
import VueLocalStorage from 'vue-localstorage'


Vue.use(VueLocalStorage)
Vue.use(Plugin)
Vue.use(Router)

Vue.mixin({
  data: function() {
    return {
      get api_url() {
		  if (window.webpackHotUpdate) {
			return "http://localhost:8000/api/";
		  } else {
			  return "http://localhost:8001/api/";
		  }
        
      }
    }
  }
})


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
      meta: {
		  requiresAuth: true
		},
      component: Dashboard2,
      children: [{
      	path: 'dashboard',
            components: {
                content:Contacts,
            }},
		
		{
      	path: 'index.html',
            components: {
                content:RealContent,

            }},
		{
      	path: '',
            components: {
                content:RealContent,
            }},
		{
      	path: 'sample1',
            components: {
                content:Sample1,
            }},            
		{
      	path: 'contacts',
            components: {
                content:Contacts,
            }},            
		{
      	path: 'costcenters',
            components: {
                content:CostCenters,
            }},            
		{
      	path: 'chartofaccounts',
            components: {
                content:ChartOfAccounts,

            }},            
  ]}
  ],
 mode: 'history',  
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(Vue.localStorage.get("token_"));
    if (!Vue.localStorage.get("token_")) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})


export default router

