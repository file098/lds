<template>
  <div class="carousel__item" ref="carouselItem">
    <div class="video-wrapper">
      <video ref="videoElement" autoplay muted loop playsinline class="video">
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

export default defineComponent({
  name: "ProjectComponent",
  components: {
    ButtonComponent,
    LinkComponent,
  },
  data() {
    return {
      descriptionOpened: false,
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
  },
});
</script>

<style scoped lang="scss">
.carousel__item {
  height: 100svh;
  width: 100svw;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  & .video__container {
    height: 100%;
    width: 100%;
  }

  & .video-background {
    width: 100svw;
    height: 100svh;
    background-size: cover;

    display: flex;
    align-items: flex-end;
  }
}

.description__wrapper {
  background: linear-gradient(to bottom, #f4f4f4, #e5e5e5);

  max-height: 0;
  height: auto;
  transition: all 0.5s cubic-bezier(1, 0, 0, 0.9);

  &.expand {
    max-height: 50vh;
  }

  & .description__content {
    display: flex;
    flex-flow: row;

    & .description__paragraph {
      margin-left: 10px;
      flex: 2;
      text-align: start;
    }

    & .description__link {
      flex: 1;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 1rem;
    }
  }
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

@media screen and (max-width: 800px) {
  .description__wrapper .description__content {
    flex-flow: column;
  }
}
</style>
