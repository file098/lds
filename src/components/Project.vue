<template>
  <div class="carousel__item" ref="carouselItem">
    <div class="video-wrapper">
      <video
        v-show="shouldLoadVideo"
        ref="videoElement"
        playsinline
        muted
        autoplay
        loop
        class="video"
      >
        <source :src="project.media" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
import ButtonComponent from "@/components/Button.vue";
import LinkComponent from "@/components/Link.vue";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ProjectComponent",
  components: {
    ButtonComponent,
    LinkComponent,
  },
  data() {
    return {
      descriptionOpened: false,
      shouldLoadVideo: false, // Flag for lazy loading
    };
  },
  props: {
    project: {
      title: { type: String },
      desc: { type: String },
      linkText: { type: String },
      link: { type: String },
      media: { type: String },
    },
  },
  methods: {
    toggleDescription() {
      this.descriptionOpened = !this.descriptionOpened;
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the carousel item is intersecting with the viewport
          // Set shouldLoadVideo to true to trigger lazy loading of video
        }
      });
    },
  },
  mounted() {
    // Intersection Observer setup
    const options = {
      root: null, // Use viewport as root
      rootMargin: "50px", // No margin
      threshold: 0.1, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.carouselItem); // Observe the carousel item
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
  margin-left: 10px;
  flex: 2;
  text-align: start;
}

.description__link {
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
}

video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.video-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.header {
  position: relative;
  color: white;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
}
</style>
