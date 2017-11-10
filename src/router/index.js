import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/search'
import City from '@/pages/city/city'

Vue.use(Router)

export default new Router({

  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/search',
      name: 'Search',
      component: Search
    },

    {
      path: '/city',
      name: 'City',
      component: City
    }
 ]

})
