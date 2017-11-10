<template>
  
  <div>
    <dom-search></dom-search>
    <div id="wrapper" @idchange="idchange(changedId)">
      <div id ="scroller">
        <ul>
          <li>
            <dom-position></dom-position>
          </li>
          <li>
            <dom-hotCity></dom-hotCity>
          </li>
          <li>
            <dom-list></dom-list>
          </li>
        </ul> 
      </div>
    </div>
    <dom-asidBar></dom-asidBar>
  </div>

</template>

<script>

  import DomSearch  from "./DomesticComponets/domSearch"
  import DomPositon from "./DomesticComponets/domPosition"
  import DomHotCity from "./DomesticComponets/domHotCity"
  import DomCityList from "./DomesticComponets/domCityList"
  import DomAsideBar from "./DomesticComponets/domAsideBar"
  import {mapState} from "vuex"
  require("../../../utils/iscroll-probe.js")

  export default {

      data() {
        return {

        }
      },

      components:{
        "dom-search" :  DomSearch,
        "dom-position": DomPositon,
        "dom-hotCity" : DomHotCity,
        "dom-list" :    DomCityList,
        "dom-asidBar":  DomAsideBar
      },

      computed: mapState({
          changedId(state){
            this.$emit("idchange");
            return state.city.alphid ; 
          }
      }),

      methods:{
        idchange:function(id){
            this.myScroll.y = id*-50 +88+"px" ;
        }

      },

      mounted(){

         this.myScroll = new IScroll("#wrapper",{ mouseWhell:true });
      },

      updated(){
          this.myScroll.refresh();
      }
  }

</script>

<style>

  #wrapper{
    position: absolute;
    top: 15.4%;
    left: 0;
    overflow:hidden; 
    height: 82%;
  }

</style>