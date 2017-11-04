<template>
  	<div>
    	<home-header/>
    	<home-swiper></home-swiper>
		<Mpswiper></Mpswiper>
		<home-activity></home-activity>
	</div>
</template>

<script>

import  HeaderComponent from "./Header";
import 	Mpswiper from "./Mpswiper";
import swiper from "./Swiper";
import ActivityComponent from "./Activity";

export default {

	components: {
		"home-header": HeaderComponent,
		"home-swiper": swiper,
		"Mpswiper":Mpswiper,
		"home-activity": ActivityComponent
	}
}
</script>

<style>
</style>
