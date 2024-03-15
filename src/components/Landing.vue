<template>
  <div class="loading-page">
    <Vue3Lottie
      ref="anim"
      :animationData="animation"
      :speed="1"
      :direction="forward"
      :autoPlay="true"
      :loop="false"
      @onComplete="stopAnimation"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import animation from "@/assets/lds-logo-animation.json";
import { Vue3Lottie } from "vue3-lottie";

export default defineComponent({
  name: "LandingComponent",
  components: { Vue3Lottie },
  data() {
    return {
      animation,
    };
  },
  methods: {
    play() {
      this.$refs["anim"].play();
    },
    stopAnimation() {
      this.$refs["anim"].stop();
    },
  },
});
</script>

<style scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
