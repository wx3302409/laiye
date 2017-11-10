<template>
  <div class="header">
    <div class="box">

      <a class="rollback iconfont icon-fanhui" href="#"></a>
      
      <div class="headerRight">
        <div class="selectedBox">
           <span class="selectedBtn" :class="DomBtnstate" @click="onclick">国内</span>
           <span class="selectedBtn" :class="ForBtnstate" @click="onclick">海外</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import {mapState} from "vuex"
 

  export default {

      data() {
        return {
          DomBtnstate:"selected",
          ForBtnstate:"released"
        }
      },

      components:{
       
      },

      methods:{

        onclick:function(e){

          if(e.target.innerText ==="国内"){
             this.DomBtnstate="selected";
             this.ForBtnstate="released";
             this.$store.state.city.domSelect = true;
          }else{
             this.DomBtnstate="released";
             this.ForBtnstate="selected";
             this.$store.state.city.domSelect = false;
          }
        }

      },

      computed: mapState({

      })

  }

</script>

<style scoped>

  .header{
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    z-index: 10;
  }

  .box{
    display:flex;
    flex-direction: row; 
    width: 100%;
    height: 13.75%;
    background: #00afc7;
  }
  
  .rollback{
    display: inline-block;
    width: .4rem;
    line-height: .88rem;
    padding: 0 .22rem;
    font-size: .36rem;
    color: #fff;
  }

  .headerRight{ 
     flex-grow: 1;
     height: .88rem;
     line-height: .88rem;
     text-align: center;
  }

  .selectedBox{
     display: inline-block;  
     padding: .02rem;
     background:#fff;
     border-radius: .1rem; 
     height: .6rem;
     margin-top: .14rem;
     margin-left: -.3rem;
  }

  .selectedBtn{
    display: inline-block;
    width: 2rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    float: left;
    border-radius: .1rem;

  }
 
  .selected{
    background: #fff;
    color: #00afc7;
  }

  .released{
    background: #00afc7;
    color: #fff;
  }

  

</style>