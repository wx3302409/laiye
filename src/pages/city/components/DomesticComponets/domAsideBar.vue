<template>

  <div class="box">
      <div class="sidebar" ref="bar" >
        <ul class="sidebarList">
          <li class="sidebarItem" v-for="alph in Citys" @touchstart="handleontouch" :id = "alph['id']" >
            {{alph['aph']}}
          </li>    
        </ul>      
      </div>
  </div>
  
</template>

<script>
 
  import {mapState} from "vuex"
 
  export default {

      data(){
        return {
            
        }
      },

      components:{
       
      },

      methods:{        
        handleontouch:function(e){
          var  _y = e.targetTouches[0].clientY - this.$refs["bar"].offsetTop ;
          var num = Math.ceil(_y/16)-1;
          //console.log();
         // document.documentElement.scrollTop = this.$store.state.city.TopPosition[num];
          
        } 
      },

      computed: mapState({
           Citys(state){
             return state.city.citys;
           }
      })

  }

</script>

<style scoped>
  .box{
    width: 100%;
  }
  
  .sidebar{
    width: .2rem;
    position: fixed;
    top: 2.2rem;
    right: .2rem;
  }
  
  .sidebarItem{
    color: #00afc7;
    margin-top: .08rem;
    font-size: .2rem;
    text-align: center;
  }


</style>