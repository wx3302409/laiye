import axios from 'axios'

export default {

	state:{
		MpSwiperInfoGroup1:[],
        MpSwiperInfoGroup2:[]
	},

	actions:{
		getMpSwiperInfo(context){
			axios.get('/static/home.json')
			.then((response)=>{
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeMpSwiperInfo",data);
					//this.hotRecommendInfo = data.hotRecommendInfo;
				}
			})
			
		}
	},

	mutations:{

		changeMpSwiperInfo:(state,data)=>{
			state.MpSwiperInfoGroup1 = data.MpSwiperInfoGroup1;
			state.MpSwiperInfoGroup2 = data.MpSwiperInfoGroup2;
		}
	},

	getters:{

		shouleGetData(state){

			if(!state.MpSwiperInfoGroup1.length &&
        	   !state.MpSwiperInfoGroup2.length){

				return true;

			}else{

				return false;
			}
		}
	}
}