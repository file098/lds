<template>
  <div class="carousel__item">
    <div
      class="video-background"
      :style="{
        background: `url(${videoBackground}) no-repeat center center`,
        'background-size': 'cover',
      }"
    >
      <ButtonComponent
        :textBox="project.title"
        :opened="descriptionOpened"
        @click="toggleDescription()"
      />
    </div>
    <div class="description__wrapper" :class="{ opened: descriptionOpened }">
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
  watch: {
    "project.media": {
      handler(newVal) {
        this.videoBackground = `${newVal}`;
      },
      immediate: true,
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
    align-items: end;
  }
}

.description__wrapper {
  height: 0;
  width: 100%;
  background: linear-gradient(to bottom, #f4f4f4, #e5e5e5);
  transition: all 350ms ease;
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

.opened {
  height: max-content;
}
</style>
