<template>
  <div v-show="!videoLoaded" class="loader">
    <Vue3Lottie
      ref="anim"
      :animationData="animation"
      :delay="1000"
      class="animation__wrapper"
      :loop="false"
      @onComplete="this.stopAnimation()"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import animation from "@/assets/lds-logo-animation.json";
import { Vue3Lottie } from "vue3-lottie";

export default defineComponent({
  name: "LoaderComponent",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      animation,
      videoLoaded: false,
    };
  },
  methods: {
    handleVideoLoaded() {
      this.videoLoaded = true;
    },
    stopAnimation() {
      this.$refs.anim.stop();
      this.videoLoaded = true;
    },
  },
});
</script>

<style scoped lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
