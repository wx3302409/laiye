import Vue from 'vue'
import Vuex from "vuex"
import VueResource from 'vue-resource'
import home from '../pages/home/module.js'
import city from '../pages/city/module.js'

Vue.use(Vuex);


export default new Vuex.Store({

	modules:{
		home:home,
		city:city
	}

})