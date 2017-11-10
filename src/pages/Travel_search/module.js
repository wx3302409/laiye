import axios from "axios";
export default {
	state: {  //存放公用的数据
		headerInfo: [],
		searchInfo: []
	},
	actions: {	//异步操作获取数据后用 commit 调用 mutations
		getIndexInfo(context) {
			axios.get('/static/Travel_search.json')
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
			state.headerInfo = data.searchHint;
			state.searchInfo = data.ticketClassification;
		}
	},
	getters: {  //避免数据的冗余,结合数据进行一层包装返回新的数据
		shouldSearchData(state) {
			if(!state.headerInfo.length &&
			   !state.searchInfo.length) {
					return true;
				}else{
					return false;
				}
		}
	}
}
