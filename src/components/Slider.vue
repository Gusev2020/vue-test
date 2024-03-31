<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
const modules = [Autoplay]
</script>

<template>
  <div class="slider">
    <div class="container">
      <swiper :modules="modules" :slides-per-view="1" :autoplay="true" loop="true">
        <swiper-slide class="swiper-slide">
          <img class="swiper-img" src="@/assets/img/slide-1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img class="swiper-img" src="@/assets/img/slide-2.jpg" alt="" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img class="swiper-img" src="@/assets/img/slide-3.jpg" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
@import 'swiper/css';
@import 'swiper/css/autoplay';

.slider {
  background-color: #ccc;
  height: 350px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.swiper-img {
  height: 100%;
  max-height: 350px;
  object-fit: cover;
}
</style>
