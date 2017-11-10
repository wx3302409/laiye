<template>
	<div>
		<onday-header></onday-header>
		<oneday-chooseList></oneday-chooseList>
		<oneday-tripList></oneday-tripList>
	</div>
</template>

<script>
	import Header from "./components/Header";
	import ChooseList from "./components/ChooseList";
	import TripList from "./components/tripList";
	
	//import axios from "axios";
		
	export default {
		
		components: {
			"onday-header": Header,
			"oneday-chooseList":ChooseList,
			"oneday-tripList":TripList
		},
		mounted() {
			if (this.$store.getters.shouldGetChooseListData) {
				this.$store.dispatch("getOnedayTripInfo");
			}
			
		}
		
	}
</script>

<style>

</style> 

