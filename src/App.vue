<template>
  <Header></Header>
  <CarouselComponent></CarouselComponent>
</template>

<script>
import CarouselComponent from "@/components/Carousel.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    CarouselComponent,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}
#app {
  font: 500 16px OverusedGroteskSemiBold, sans-serif;
  letter-spacing: -0.25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
