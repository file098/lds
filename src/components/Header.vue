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
    <div class="entries-container">
      <div
        v-for="(category, categoryName) in info"
        :key="categoryName"
        class="entry-row"
      >
        <span class="category-name">{{ categoryName }}</span>
        <div class="entry-wrapper">
          <div v-for="(entry, index) in category" :key="index" class="entry">
            <span>Date: {{ entry.date }}</span>
            <span>Entry: {{ entry.entry }}</span>
            <span>Location: {{ entry.location }}</span>
          </div>
        </div>
      </div>
      <div class="entry-row">
        <span class="category-name">contatti</span>
        <div class="entry-wrapper contacts">
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonComponent from "@/components/Button.vue";

export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {
      infoVisible: false,
      title: "Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure nam quos a et, blanditiis voluptas delectus asperiores maxime voluptatibus beatae impedit eius natus! Quod dolores eveniet dignissimos consequatur minus.",
      info: {
        formazione: [
          {
            date: "2018/19—2020/21",
            entry:
              "scienze e tecniche della comunicazione grafica e multimediale",
            location: "IUSVE (Venezia), 110L",
          },
          {
            date: "2013/14—2017/18",
            entry: "liceo scientifico (scienze applicate) XXV Aprile",
            location: "Portogruaro (Venezia)",
          },
        ],
        esperienza: [
          {
            date: "04/2023—in corso",
            entry: "graphic e motion designer freelance",
            location: "",
          },
          {
            date: "07/2023—in corso",
            entry: "graphic designer & co-founder Club Recordo",
            location: "Treviso",
          },
          {
            date: "03/2022—in corso",
            entry: "art director & co-founder What If",
            location: "Padova",
          },
          {
            date: "03/2022—04/2023",
            entry: "graphic designer, Studio Idee Materia",
            location: "Teglio Veneto (Venezia)",
          },
          {
            date: "04/2021—04/2021",
            entry: "junior graphic designer (tirocinio), dogtrot",
            location: "Treviso",
          },
        ],
      },
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    showInfo() {
      this.infoVisible = !this.infoVisible;
    },
  },
});
</script>

<style>
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

.info-container {
  font: 600 16px OverusedGroteskSemiBold, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  margin: 0;
  color: #000;
  background-color: #e5e5e5;
  z-index: 99;
  transition: transform 0.5s cubic-bezier(1, 0, 0, 0.9);

  & a {
    text-decoration: none;
    color: inherit;
  }

  & .entries-container {
    margin-top: 4rem;
    display: flex;
    flex-flow: column;

    & .entry-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      border-top: 1px solid black;

      & .category-name {
        text-align: left;
        margin-left: 1rem;
        margin-top: 0.5rem;
      }

      & .entry-wrapper {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 10px;

        & .entry {
          display: flex;
          flex-flow: column;
          align-items: flex-start;
          padding: 1rem;
        }

        & .entry-wrapper.contacts > * {
          padding: 0;
        }
      }
    }
  }
}
</style>
