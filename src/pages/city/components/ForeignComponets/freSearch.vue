<template>

  <div class="box">
    <input type="text" class="searchInput" placeholder="请输城市名或拼音">
  </div>
  
</template>

<script>

  import {mapState} from "vuex"
 
  export default {

      data() {
        return {

        }
      },

      components:{
       
      },

      computed: mapState({

      })

  }

</script>

<style scoped>

  .box{
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 6.3%;
    background: #00afc7;
    padding: 0 0 .1rem 0; 
    text-align: center;
    z-index: 10;
    top: .88rem;
    left: 0rem;
  }
  
  .searchInput{
    height: .3rem;
    width: 94%;
    line-height: .3rem;
    padding: .16rem 0 .16rem .1rem;
    border-radius: .1rem;
    border: none;
    font-size: 13px;
    text-align: center;
    margin:0 auto;
  }

</style>