import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import OrganizeList from '@/components/OrganizeList'
import Index from '@/components/Index'
import Apply from '@/components/Apply'
import Detail from '@/components/Detail'
import Handlewxpay from '@/components/Handlewxpay'
import Vote from '@/components/Vote'
import Activity from '@/components/Activity'
import Certificate from '@/components/Certificate'
import Charttest from '@/components/Charttest'
import Lottery from '@/components/Lottery'
import TestLottery from '@/components/TestLottery'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: "/Index",
      children: [
        {
          path: '/Index',
          name: 'Index',
          component: Index
        },
        {   
          path: '/Login',
          name: 'Login',
          component: Login
        },
        {
          path: '/OrganizeList',
          name: 'OrganizeList',
          component: OrganizeList
        },
        {
          path: '/Apply',
          name: 'Apply',
          component: Apply
        },
        {
          path: '/Detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: '/Handlewxpay/:addressto/:price/:memo',
          name: 'Handlewxpay',
          component: Handlewxpay
        }, 
        {
          path: '/Vote',
          name: 'Vote',
          component: Vote
        }, {
          path: '/Activity',
          name: 'Activity',
          component: Activity
        }, {
          path: '/Certificate',
          name: 'Certificate',
          component: Certificate
        }, {
          path: '/Charttest',
          name: 'Charttest',
          component: Charttest
        }, {
          path: '/Lottery',
          name: 'Lottery',
          component: Lottery
        }, {
          path: '/TestLottery',
          name: 'TestLottery',
          component: TestLottery
        }
      
        
      ]
    }
  ]
})
