import axios from "axios";
export default{
	state: {  //存放公用的数据
		swiperInfo: [],
		hotRecommendInfo: [],
		ActivityInfos: [],
        WeekendInfos: [], 
	},
	actions: {	//异步操作获取数据后用 commit 调用 mutations
		getSwiperInfo(context) {
			axios.get('/static/home.json')
				.then((response) => {
					if (response.status === 200) {
						const {data} = response.data
						context.commit("changeIndexInfo", data)
					}
				})
		}
	},
	mutations: {	//改变数据，返回给state
		changeIndexInfo(state, data) {
			state.swiperInfo = data.banner;
			state.hotRecommendInfo = data.hotRecommendInfo;
			state.ActivityInfos = data.ActivityInfos;
			state.WeekendInfos = data.WeekendInfos
		}
	},
	getters: {  //避免数据的冗余,结合数据进行一层包装返回新的数据
		shouldGetData(state) {
			if(!state.swiperInfo.length && 
			   !state.hotRecommendInfo.length &&
			   !state.ActivityInfos.length &&
			   !state.WeekendInfos.length) {
					return true
				}else{
					return false
				}
		}
	}
}
