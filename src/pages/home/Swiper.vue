<template>
  <swiper :options="swiperOption" ref="mySwiper">
  	
    <swiper-slide v-for="(esources, index) in hotsight" :key="esources.id">
    	<div class="swiper-img-con">
    		<img class="swiper-img" :src="esources.listImg"/>
    	</div>
    </swiper-slide>
  
    <div class="swiper-pagination home-swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import {mapState} from "vuex";
  
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
    computed: mapState({ //将公共的数据做映射
      hotsight(state) {
        return state.home.swiperInfo
      }
    }),
    components: {
	    swiper,
	    swiperSlide
		}
  }
</script>
<style type="text/css">
	.home-swiper-pagination .swiper-pagination-bullet{ /*命名空间*/
		background: #00bcd4;
	}
</style>
<style type="text/css" scoped> /*css样式只在当前组件有效*/
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