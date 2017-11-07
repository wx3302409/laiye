import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		
        hotRecommendInfo: [],
        MpSwiperInfoGroup1:[],
        MpSwiperInfoGroup2:[],
        ActivityInfos: [],
        WeekendInfos: [],    
	},
	actions:{
		getActivityInfo(context) {
			axios.get('/static/index.json')
				 .then((response) => {
				 	if(response.status === 200){
						const {data} = response.data;
						context.commit("changeActivityInfo", data.ActivityInfos);
						context.commit("changeWeekendInfo", data.WeekendInfos)
						
					}
				 })
		}

	},
	mutations: {
		changeActivityInfo(state, data) {
			
			state.ActivityInfos = data
		},
		changeWeekendInfo(state, data) {
			state.WeekendInfos = data
		}
	},
	getters: {}
})