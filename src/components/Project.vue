<template>
  <div class="carousel__item">
    <div
      class="video-background"
      v-lazy="videoBackground"
      :style="{
        backgroundImage: `url(${project.media})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }"
    >
      <ButtonComponent
        :textBox="project.title"
        :opened="descriptionOpened"
        @click="toggleDescription()"
      />
    </div>
    <div class="description__wrapper" :class="{ expand: descriptionOpened }">
      <div class="description__content">
        <p class="description__paragraph">{{ project.desc }}</p>
        <LinkComponent
          :text="project.linkText"
          :link="project.link"
          class="description__link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { lazy } from "vue-lazyload";
import ButtonComponent from "@/components/Button.vue";
import LinkComponent from "@/components/Link.vue";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ProjectComponent",
  components: {
    ButtonComponent,
    LinkComponent,
  },
  directives: {
    lazy,
  },
  data() {
    return {
      descriptionOpened: false,
      videoBackground: null,
    };
  },
  props: {
    title: { type: String },
    project: {
      title: { type: String },
      desc: { type: String },
      linkText: { type: String },
      link: { type: String },
      media: { type: String },
    },
  },
  // watch: {
  //   "project.media": {
  //     handler(newVal) {
  //       this.videoBackground = `${newVal}`;
  //     },
  //     immediate: true,
  //   },
  // },
  methods: {
    toggleDescription() {
      this.descriptionOpened = !this.descriptionOpened;
      console.log(this.descriptionOpened);
    },
  },
});
</script>

<style scoped lang="scss">
.carousel__slide--sliding {
  transition: transform 3s cubic-bezier(1, 0, 0, 0.9);
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__item {
  height: 100vh;
  width: 100vw;
  background-color: rgb(16, 185, 129);
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  & .video__container {
    height: 100%;
    width: 100%;
  }

  & .video-background {
    width: 100vw;
    height: 100vh;
    background-size: cover;

    display: flex;
    align-items: flex-end;
  }
}

.description__wrapper {
  width: 100%;
  background: linear-gradient(to bottom, #f4f4f4, #e5e5e5);

  max-height: 0;
  height: auto;
  transition: all 0.5s cubic-bezier(1, 0, 0, 0.9);

  &.expand {
    max-height: 50vh;
  }
}

.description__content {
  display: flex;
  flex-flow: row;
}

.description__paragraph {
  flex: 2;
  text-align: start;
}

.description__link {
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
}
</style>
