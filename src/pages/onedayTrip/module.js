import axios from "axios";
export default {
	state: {  //存放公用的数据
		ChooseList: [],
		TripListInfo:[]
		 
	},
	actions: {	//异步操作获取数据后用 commit 调用 mutations
		getOnedayTripInfo(context) {
			axios.get('/static/onedayTrip.json')
				.then((response) => {
					if (response.status === 200) {
						const {data} = response.data;
						context.commit("changeOnedayTripInfo", data)
						//console.log(data)
					}
				})
		}
	},
	mutations: {	//改变数据，返回给state
		changeOnedayTripInfo(state, data) {
			state.ChooseList = data.ChooseList;
			state.TripListInfo = data.TripListInfo;
		}
	},
	getters: {  //避免数据的冗余,结合数据进行一层包装返回新的数据
		shouldGetChooseListData(state) {
			if(!state.ChooseList.length &&
				!state.TripListInfo.length ) {
					return true;
				}else{
					return false;
				}
		}
	}
}
