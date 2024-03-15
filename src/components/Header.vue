<template>
  <ButtonComponent
    class="info-button"
    :opened="infoVisible"
    :textBox="'lds'"
    @click="showInfo"
  />
  <div class="logo-wrapper">
    <img class="lds-logo" src="../assets/lds-logo.svg" alt="lds" />
  </div>

  <div
    class="info-container"
    :style="{
      transform: infoVisible ? 'translateY(0)' : 'translateY(-100%)',
    }"
  >
    <div class="title"><p>Services</p></div>
    <div class="canvas__container">
      <Canvas></Canvas>
    </div>
    <div class="contacts__wrapper">
      <p class="contacts__title">contatti</p>
      <div class="contacts">
        <a href="mailto:delsal.lorenzo@gmail.com" class="entry"
          >delsal.lorenzo@gmail.com</a
        >
        <span class="entry">+39 331 2921 807</span>
        <a href="https://www.instagram.com/lorenzodelsal/" class="entry"
          >@lorenzodelsal</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonComponent from "@/components/Button.vue";
import Canvas from "./Canvas.vue";

export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {
      infoVisible: false,
    };
  },
  components: {
    ButtonComponent,
    Canvas,
  },
  methods: {
    showInfo() {
      this.infoVisible = !this.infoVisible;
    },
  },
});
</script>

<style lang="scss">
:root {
  --header-height: 50px;
}

.info-button {
  position: absolute;
  top: 0;
  left: 0;
}

.logo-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  mix-blend-mode: difference;
  z-index: 1;

  & .lds-logo {
    position: fixed;
    top: 0;
    right: 0;
    margin: 10px;
  }
}

.canvas__container {
  flex: 1;
}

.info-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  max-height: 90vh;

  display: flex;
  flex-flow: column;

  margin: 0;
  font: 600 16px OverusedGroteskSemiBold, sans-serif;
  color: #000;
  background-color: rgb(220, 220, 220);
  z-index: 99;
  transition: transform 0.5s cubic-bezier(1, 0, 0, 0.9);

  & .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  & .contacts__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 1rem;

    & .contacts__title {
      margin-left: 1rem;
    }

    & .contacts {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
}
</style>
