<template>

  <div class="box">
    <div class="positionTitel">热门城市</div>
    <div class="positionList">
      <div class="ItemBox" v-for="cityItem in hotCitys">
        <div class="Item">{{cityItem}}</div>
      </div>
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
          hotCitys(state){
            return state.city.hotCitys;
          }
      })
  }

</script>

<style scoped>

  .box{
    width: 100%; 
  }

  .positionTitel{
    width: 100%;
    background: #ddd;
    padding-left: .3rem;
    line-height: .54rem;
    color: #616161;
    font-size: .26rem;
  }
  
  .positionList{
    width: 100%;
    padding: .04rem .5rem .26rem .2rem; 
    background: #fff;
    overflow:hidden;
    text-align: center;
   }

  .ItemBox{
    float: left;
    width: 28%;
    padding: .2rem .14rem 0 .1rem;
  }

  .Item{
    height: 28px;
    border: .02rem solid #c9cccd; 
    border-radius: .06rem;
    line-height: 28px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }





</style>