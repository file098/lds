<template>
  <Cursor :label="cursorLabel" :cursorX="cursorX" :cursorY="cursorY"></Cursor>
  <Carousel
    ref="myCarousel"
    :wrap-around="true"
    @mousemove="handleMouseMove($event)"
  >
    <Slide
      v-for="project in this.slides"
      :key="project"
      class="carousel__slide"
      @click="handleClick($event)"
    >
      <Project :project="project"></Project>
    </Slide>
  </Carousel>
  <Canvas></Canvas>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import Cursor from "./Cursor.vue";
import Canvas from "./Canvas.vue";
import Project from "./Project.vue";

import "vue3-carousel/dist/carousel.css";
import projectList from "@/assets/projectList.json";

export default defineComponent({
  name: "CarouselComponent",
  components: {
    Carousel,
    Slide,
    Cursor,
    Canvas,
    Project,
  },
  data() {
    return {
      cursorLabel: "Prev",
      cursorX: 0,
      cursorY: 0,
      slides: [],
    };
  },
  methods: {
    handleClick(event) {
      if (event.target.className == "video") {
        const clickX = event.clientX;
        if (clickX > window.innerWidth / 2) {
          this.$refs.myCarousel.next();
        } else {
          this.$refs.myCarousel.prev();
        }
        this.$refs.myCarousel.updateSlideWidth();
      }
    },
    handleMouseMove(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
      this.cursorLabel =
        event.clientX > window.innerWidth / 2 ? "Next" : "Prev";
    },
    fetchSlides() {
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
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
