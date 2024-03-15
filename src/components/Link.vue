<template>
  <div class="link-container">
    <div class="link__wrapper">
      <a href="{{ link }}" class="link">{{ text }}</a>
      <img class="right-arrow" src="@/assets/right-arrow.svg" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "linkComponent",
  props: {
    text: { type: String },
    link: { type: String },
  },
});
</script>

<style scoped lang="scss">
.link-container {
  width: max-content;
  display: flex;
}

.link__wrapper {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-arrow {
  display: none;
  transition: all 0.3s ease;
}

.link__wrapper:hover .right-arrow {
  display: inline-block;
}

.link {
  padding-right: 6px;
  text-decoration: underline;
  color: inherit;
}
</style>
