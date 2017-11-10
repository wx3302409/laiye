<template>
	<div>
		<index-header></index-header>
		<index-search></index-search>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import SearchComponent from "./Search";
			
	export default {
		components: {
			"index-header": HeaderComponent,
			"index-search": SearchComponent
		},
		mounted() {
			if (this.$store.getters.shouldSearchData) {
				this.$store.dispatch("getIndexInfo");
			}
			
		}
	}
</script>

<style>

</style> 