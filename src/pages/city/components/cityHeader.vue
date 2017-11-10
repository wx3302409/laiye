<template>
  
  <div>
    <component-header></component-header>
  </div>
  
</template>

<script>

  import Header from "./headerComponents/header"
  import {mapState} from "vuex"
  
  export default {

      data() {
        return {

        }
      },

      components:{
       "component-header" : Header
      },

      computed: mapState({

      })

  }

</script>

<style>
</style>