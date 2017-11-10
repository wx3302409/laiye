import axios from 'axios'

export default {

	state:{
		position:[],
        hotCitys:[],
        citys:[],
        TopPosition:[],
        domSelect:true
	},

	actions:{
		getCityInfo(context){
			axios.get('/static/city.json')
			.then((response)=>{
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeCityInfo",data);
				}
			})
		}
	},

	mutations:{

		changeCityInfo:(state,data)=>{
			state.position = data.position;
			state.hotCitys = data.hotCitys;
			state.citys = data.citys;
		}
	},

	getters:{

		shouleGitCityData(state){

			if(!state.position.length &&
        	   !state.hotCitys.length&&
        	   !state.citys.length){

				return true;

			}else{

				return false;
			}
		}
	}
}