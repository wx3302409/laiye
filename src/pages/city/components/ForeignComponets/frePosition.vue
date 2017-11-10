<template>

  <div class="box fre">
    <div class="positionTitel fre" >您的位置</div>
    <div class="positionList fre" >
      <div class="Item fre" v-html="position"></div>
    </div>
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
        position(state){
            return state.city.position;
          }
      })

  }

</script>

<style scoped>

  .fre .box{
    width: 100%; 
  }

  .fre .positionTitel{
    width: 100%;
    background: #ddd;
    padding-left: .3rem;
    line-height: .54rem;
    color: #616161;
    font-size: .26rem;
  }
  
  .fre .positionList{
    width: 100%;
    padding: .04rem .5rem .26rem .2rem; 
    background: #fff;
    overflow:hidden;
   }

  .fre .Item{
    float: left;
    width: 28%;
    height: 28px;
    border: .02rem solid #c9cccd; 
    border-radius: .06rem;
    line-height: 28px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: .2rem .14rem 0 .1rem;
  }

</style>