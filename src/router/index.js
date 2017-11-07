import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Travel_search from '@/pages/Travel_search/Travel_search'
import Search from '@/pages/search/search'
import onedayTrip from '@/pages/onedayTrip/onedayTrip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/travel_search',
      name: 'travel_search',
      component: Travel_search
		},
		{
      path: '/search',
      name: 'Search',
      component: Search

    }
 	]
})
