<template>
  <Cursor :label="cursorLabel" :cursorX="cursorX" :cursorY="cursorY" />
  <swiper
    :loop="true"
    effect="cube"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    @mousemove="handleMouseMove($event)"
  >
    <SwiperSlide
      v-for="project in this.slides"
      :key="project"
      class="carousel__slide"
      @click="handleClick($event)"
    >
      <Project :project="project" />
    </SwiperSlide>
    ...
  </swiper>
</template>

<script>
import { defineComponent } from "vue";
import Cursor from "./Cursor.vue";
import Project from "./Project.vue";
import projectList from "@/assets/projectList.json";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default defineComponent({
  name: "CarouselComponent",
  components: {
    Cursor,
    Project,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
    };
  },

  data() {
    return {
      cursorLabel: "",
      cursorX: 0,
      cursorY: 0,
      slides: [],
    };
  },
  methods: {
    handleClick(event) {
      const swiper = document.querySelector(".swiper").swiper;

      if (event.target.className == "video") {
        const clickX = event.clientX;
        if (clickX > window.innerWidth / 2) {
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }
      }
    },
    handleMouseMove(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
      this.cursorLabel =
        event.clientX > window.innerWidth / 2 ? "Next" : "Prev";
    },
    async fetchSlides() {
      try {
        this.slides = projectList.projects;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    this.fetchSlides();
  },
});
</script>

<style>
.carousel__slide {
  height: 100svh;
  display: flex;
  flex-direction: column;
}
</style>
