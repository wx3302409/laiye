<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
    	<div class="swiper-img-con">
    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg"/>
    	</div>
    </swiper-slide>
    <swiper-slide>
    	<div class="swiper-img-con">
    		<img class="swiper-img"  src="http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg"/>
    	</div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: 1500,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
	    swiper,
	    swiperSlide
		}
  }
</script>
<style type="text/css">
	.swiper-pagination-bullet{
		background: #00bcd4;
	}
</style>
<style type="text/css" scoped>
	/*让高度自动变为宽度的31.25%,只能用padding实现*/
	.swiper-img-con {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
</style>