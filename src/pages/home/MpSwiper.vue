<template>

  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>

      <div class = "mp-swiper-box" >

        <div class="mp-item" v-for = "info in firstGroup">
          <a href="#">
            <div class="mp-img">
              <img :src = "info.img" />
            </div>
            <div class="keywords">{{info.keyword}}</div>
          </a>
        </div>

      </div>

    </swiper-slide>

    <swiper-slide>

      <div class = "mp-swiper-box">

        <div class="mp-item" v-for = "info in secondGroup" >
          <a href="#">
            <div class="mp-img">
              <img :src = "info.img" >
            </div>
            <div class="keywords">{{info.keyword}}</div>
          </a>
        </div>

      </div>

    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {

    props:["firstGroup","secondGroup"],

    data() {
      return {
        swiperOption: {
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        }
      }
    },

    components:{
      swiper,
      swiperSlide
    }

  }

</script>

<style>

  .mp-swiper-box{
      width: 100%;
      height:0;
      float: left;
      padding-top: 5px;
      padding-bottom: 59%;
  }
  
  .mp-item{
      width:25%;
      height: 65px;
      padding-top: 15px;
      float: left;
  }

  .mp-img{
      width: 33px;
      height: 33px;
      margin:0 auto;
      background: url(../../assets/backimg.jpg) ;
        border-radius: 9px;
  }
  
  .mp-img>img{
    width: 100%;
  }

  .keywords{
    margin-top: .2rem;
    color: #212121;
    font-size: .28rem;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }


</style>