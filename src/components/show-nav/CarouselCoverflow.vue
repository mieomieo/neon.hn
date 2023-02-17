<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 0.8,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide @click="$emit('chooseBackground', 'background1.jpg')">
      <img src="../../assets/images/background/background1.jpg" />
    </swiper-slide>
    <swiper-slide @click="$emit('chooseBackground', 'background2.jpg')">
      <img src="../../assets/images/background/background2.jpg" />
    </swiper-slide>
    <swiper-slide @click="$emit('chooseBackground', 'background3.jpg')">
      <img src="../../assets/images/background/background3.jpg" />
    </swiper-slide>
    <swiper-slide @click="$emit('chooseBackground', 'background4.jpg')">
      <img src="../../assets/images/background/background4.jpg" />
    </swiper-slide>
    <swiper-slide @click="$emit('chooseBackground', 'background5.jpg')">
      <img src="../../assets/images/background/background5.jpg" />
    </swiper-slide>
    <swiper-slide @click="$emit('chooseBackground', 'background6.jpg')">
      <img src="../../assets/images/background/background6.jpg" />
    </swiper-slide>
    <swiper-slide @click="$emit('chooseBackground', 'background7.jpg')">
      <img src="../../assets/images/background/background7.jpg" />
    </swiper-slide>
    <swiper-slide @click="$emit('chooseBackground', 'background8.jpg')">
      <img src="../../assets/images/background/background8.jpg" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  padding-top: 25px;
  padding-bottom: 36px;
  /* margin-bottom: 70px; */
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-pagination-bullet {
  background-color: #fff;
  /* position: absolute; */
}
</style>
