<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script>
import p5 from "p5";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CanvasComponent",
  mounted() {
    this.createSketch();
    window.addEventListener("resize", this.windowResized);
  },
  methods: {
    createSketch() {
      const sketch = (p) => {
        let lds_logo;
        let angleX = 0;
        let angleY = 0;
        p.preload = () => {
          lds_logo = p.loadModel("/3d/ldsLogo.obj", true);
        };

        p.setup = () => {
          const container = this.$refs.canvas;
          const width = container.offsetWidth;
          const height = container.offsetHeight;
          p.createCanvas(width, height, p.WEBGL);
          p.background(220);
        };
        p.windowResized = () => {
          const container = this.$refs.canvas;
          const width = container.offsetWidth;
          const height = container.offsetHeight;
          p.resizeCanvas(width, height);
        };
        p.draw = () => {
          p.clear();

          const maxAngle = p.PI / 6;
          angleX = p.map(p.mouseY, 0, p.height, -maxAngle, maxAngle);
          angleY = p.map(p.mouseX, 0, p.width, -maxAngle, maxAngle);

          p.rotateX(angleX);
          p.rotateY(angleY);

          p.ambientLight(100, 100, 100);
          p.directionalLight(200, 200, 200, 1, 0.5, -1);
          p.directionalLight(70, 70, 100, -0.5, 1, 0.5);
          p.scale(2, -2, 2);
          p.fill("black");
          p.model(lds_logo);
        };
      };
      this.p5Instance = new p5(sketch, this.$refs.canvas);
    },
    windowResized() {
      this.p5Instance.remove(); // Remove the old instance
      this.createSketch(); // Create a new instance
    },
    beforeDestroy() {
      this.p5Instance.remove();
      window.removeEventListener("resize", this.windowResized);
    },
  },
});
</script>

<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
