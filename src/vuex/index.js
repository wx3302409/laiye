import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"
import home from "../pages/home/module.js";


Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home
	}
})
	


