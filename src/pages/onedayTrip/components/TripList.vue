<template>
	<div class="TripListbox">
		<ul class="TripListContent">
			<li class="TripListContent-li" v-for="item in TripListInfo" key="item.id">
				<router-link to="item.link">
					<div>
						<img src="item.imgUrl"/>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
		
  
</template>

<script>
 	import {mapState} from "vuex";
 	require('../../../utils/iscroll-probe.js') 

	export default {
  		data(){
  			return { 	
  				
 			}
		},
		computed: mapState({
			TripListInfo(state) {
				return state.oneDayTrip.TripListInfo;
							
			}
		}),
		methods: {
			
		}

		
	}


</script>

<style scoped>
.TripListbox {
	width:100%;
}
.TripListContent-li {
	width:100%;
	height:2rem;
}


</style>
