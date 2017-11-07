<template>
  	<div>
    	<home-header/>
    	<search-content :hotCitys="hotCitys" :hotScenerys = "hotScenerys" >
    	</search-content>
	</div>
</template>

<script>

	import  HeaderComponent from "../home/Header";
	import  SearchContent from "./SearchContent";

	export default {

		created: function(){
            this.$http.get('/static/home.json').then(response => {
                this.hotScenerys = response.body.data.hotScenerys;
                this.hotCitys = response.body.data.hotCitys;
                
            }, response => {
                console.log("get index data error");
            });
        },

        data (){

            return {
                hotScenerys: [],
                hotCitys:[]
            }
        },

		components: {
			"home-header": HeaderComponent,
			"search-content": SearchContent
		}

	}

</script>

<style>
</style>