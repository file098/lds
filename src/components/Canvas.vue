<template>
  <div id="canvas"></div>
</template>

<script>
// import P5 from "p5";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CanvasComponent",
  mounted() {
    // const script = (p5) => {
    //   p5.setup = () => {
    //     p5.createCanvas(500, 500);
    //   };
    //   p5.draw = () => {
    //     p5.background(0);
    //     p5.fill(255);
    //     p5.rect(100, 100, 50, 50);
    //     p5.ellipse(p5.mouseX, p5.mouseY, 40, 40);
    //   };
    // };
    // // Attach the canvas to the div
    // let sketch = new P5(script, "canvas");
  },
});
</script>

<style></style>
