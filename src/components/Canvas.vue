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
        let obj;
        let angleX = 0;
        let angleY = 0;
        p.preload = () => {
          obj = p.loadModel("/3d/model.obj", true);
        };
        p.setup = () => {
          const container = this.$refs.canvas;
          const width = container.offsetWidth;
          const height = container.offsetHeight;
          p.createCanvas(width, height, p.WEBGL);
        };
        p.windowResized = () => {
          const container = this.$refs.canvas;
          const width = container.offsetWidth;
          const height = container.offsetHeight;
          p.resizeCanvas(width, height);
        };
        p.draw = () => {
          p.background(220);
          const maxAngle = p.PI / 4.5;
          angleX = p.map(p.mouseY, 0, p.height, -maxAngle, maxAngle);
          angleY = p.map(p.mouseX, 0, p.width, -maxAngle, maxAngle);

          p.rotateX(angleX);
          p.rotateY(angleY);

          p.noStroke();
          p.pointLight(
            255,
            255,
            255,
            window.innerWidth / 2,
            window.innerHeight / 2,
            100
          );
          p.specularMaterial(255, 255, 255);
          p.shininess(100);
          p.fill(0);
          p.scale(2, -2, 2);

          p.model(obj);
        };
      };
      this.p5Instance = new p5(sketch, this.$refs.canvas);
    },
    windowResized() {
      this.p5Instance.remove();
      this.createSketch();
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
