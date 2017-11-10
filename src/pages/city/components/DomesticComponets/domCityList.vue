<template>

  <div class="box">
      <div class="Alph" v-for="cityItem in Citys" :id ="cityItem['id']" >
        <div class="firstAlph" :ref="cityItem['aph']" >{{cityItem['aph']}}</div>
          <ul class="citylist">
            <li class="cityItem" v-for="item in cityItem['name']">{{item}}</li>
          </ul>
      </div>
  </div>
  
</template>

<script>
 
  import {mapState} from "vuex"
 
  export default {

      data(){
        return {
            // position:[],
            // currentIndex: 0
        }
      },

      components:{
       
      },

      computed: mapState({

          Citys(state){
            return state.city.citys;
          }//,

          // changedPositionIndex(state){
          //   return state.city.positionIndex;
          // }
      }),

      updated(){

        for( var i = 0 ; i < this.Citys.length ; i++){

        this.$store.state.city.TopPosition.push(this.$refs[this.Citys[i]['aph']][0].offsetTop);
        }
      }
  }

</script>

<style scoped>
  .box{
    width: 100%;
  }
  
  .Alph{
    width: 100%;

  }
  
  .firstAlph{
    line-height: .54rem;
    padding-left: .3rem;
    color: #616161;
    font-size: .26rem;
    background: #ddd;
    border-bottom: .02rem solid #aaa;
  }

  .cityItem{
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
    background: #fff;
    margin-bottom: .02rem;
    border-bottom: .02rem solid #aaa;
    width: 100%
  }

 /* .sidebar{
    width: .2rem;
    position: fixed;
    top: 2rem;
    right: .2rem;
  }
  
  .sidebarItem{
    color: #00afc7;
    margin-top: .04rem;
  }*/


</style>