<template>

  <div>
    <city-header></city-header>
    <domestic v-if = "this.$store.state.city.domSelect"></domestic>
    <foreign v-if = "!(this.$store.state.city.domSelect)"></foreign>
  </div>

</template>

<script>

  import CityHeader from "./components/cityHeader"
  import CityDomestic from "./components/domestic"
  import CityForeign from "./components/foreign"
    
  export default {

      data() {
        return {

        }
      },

      components:{
        "city-header": CityHeader,
        "domestic": CityDomestic, 
        "foreign": CityForeign
      },

     
      created(){

      },

      mounted(){
        if(this.$store.getters.shouleGitCityData)
          this.$store.dispatch("getCityInfo");
      }

  }

</script>

<style>
</style>