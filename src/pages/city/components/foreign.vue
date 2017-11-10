<template>

  <div>
    <fre-search></fre-search>
    <fre-position></fre-position>
  </div>

</template>

<script>

  import FreSearch  from "./ForeignComponets/freSearch"
  import FrePosition  from "./ForeignComponets/frePosition"
  import {mapState} from "vuex"
 

  export default {

      data() {
        return {

        }
      },

      components:{
        "fre-search" :  FreSearch ,
        "fre-position": FrePosition
        // "dom-hotCity" : DomHotCity,
        // "dom-list" :    DomCityList,
        // "dom-asidBar":  DomAsideBar
      },

      computed: mapState({

      }),

      mounted(){
        if(this.$store.getters.shouleGitCityData)
          this.$store.dispatch("getCityInfo");
      }

  }

</script>

<style>
</style>