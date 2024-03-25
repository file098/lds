<script lang="ts">
import { TresCanvas } from "@tresjs/core";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SketchComponent",
  component: {
    TresCanvas,
  },
});
</script>

<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>

<style></style>
