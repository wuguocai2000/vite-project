<template>
  <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{
    delay: 4000,
    disableOnInteraction: false,
  }" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="img in banners">
      <img class="banner" :src="img" :style="{height: bannerHeight + 'px'}" />
    </swiper-slide>
  </swiper>
</template>
<script>
import {ref,shallowReactive} from 'vue'

import banner from "@/assets/banner.jpg";
import banner2 from "@/assets/banner2.jpg";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bannerStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

let bannerHeight = ref(400)

function calcBannerHeight() {
  if(document.body.clientWidth > 800) {
    bannerHeight.value = 400
    let height = (document.body.clientWidth - 800) / 2
    bannerHeight.value = bannerHeight.value + height
  }
}

calcBannerHeight()

window.onresize = function() {
    // 浏览器窗口变化后需要做的事情
    calcBannerHeight()
}

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const banners = shallowReactive([banner,banner2])
    return {
      modules: [Autoplay, Pagination, Navigation],
      banners,
      bannerHeight
    };
  },
};
</script>
