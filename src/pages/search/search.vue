<template>
  	<div>
    	<home-header/>
    	<search-content></search-content>
	</div>
</template>

<script>

	import  HeaderComponent from "../home/Header";
	import  SearchContent from "./SearchContent";

	export default {

		components: {
			"home-header": HeaderComponent,
			"search-content": SearchContent
		}
	}

</script>

<style>
</style>