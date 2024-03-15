<template>
  <div ref="sketchContainer"></div>
</template>

<script>
import defineComponent from "vue";

export default defineComponent({
  name: "SketchComponent",
  mounted() {
    this.createSketch();
  },
  methods: {
    createSketch() {
      const sketch = (p) => {
        p.setup = () => {
          p.createCanvas(400, 400);
          // Your p5.js setup code goes here
          p.background(220);
        };

        p.draw = () => {
          // Your p5.js draw code goes here
          p.fill(255, 0, 0);
          p.ellipse(p.mouseX, p.mouseY, 50, 50);
        };
      };

      // Create a new p5 instance in the specified container
      this.p5Instance = new p5(sketch, this.$refs.sketchContainer);
    },
  },
  beforeDestroy() {
    // Cleanup p5 instance when component is destroyed
    this.p5Instance.remove();
  },
});
</script>

<style>
/* Add styles here if necessary */
</style>
