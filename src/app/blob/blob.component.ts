import { AfterViewChecked, Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss'],
})
export class BlobComponent implements OnInit {
  radius = 250;
  radius2 = 150;
  xoff = 0.0;
  yoff = 0.0;
  headerWrapperHeight = 0;
  dots = [{ x: 0, y: 0 }];
  windowHeight = 0;

  constructor() { }

  setupGrid(rows: number, columns: number, density: number, width: number, height: number,): void {
    this.dots = [];
    
    var ratioW = height / columns * density; // ever "ratio" i need to put a dot
    var ratioH = width / rows * density; // ever "ratio" i need to put a dot

    for (var x = 0; x < width; x += ratioW) {
      for (var y = 0; y < height; y += ratioH) {
        this.dots.push({ x, y });
      }
    }
    
  };

  ngOnInit() {

    const header = document.querySelector('#header-wrapper');
    if (header) { this.headerWrapperHeight = header.clientHeight; }

    const sketch = (s: any) => {

      s.setup = () => {
        this.windowHeight = s.windowHeight - this.headerWrapperHeight;
        s.createCanvas(s.windowWidth, s.windowHeight - this.headerWrapperHeight).parent('canvasContainer');
        
        this.setupGrid(500, 500, 10, s.windowWidth, s.windowHeight);
      };

      s.draw = () => {
        s.background(255);

        for (var count = 0; count < this.dots.length; count++) {
          s.ellipse(this.dots[count].x, this.dots[count].y, 1, 1, 1);
        }

        s.translate(s.width / 2, s.height / 2 - this.headerWrapperHeight);
        s.fill(60);
        this.xoff += 0.01;

        s.beginShape();
        let xoff = 0;

        let xy = s.mouseX * 100 + s.mouseY;

        for (let a = 0; a < s.TWO_PI; a += 0.05) {
          let offset = s.map(s.noise(xoff, this.yoff), 0, 1, -25, 25);
          let r = this.radius + offset;
          let x = r * s.cos(a);
          let y = r * s.sin(a);
          s.vertex(x, y);
          xoff += 0.1;
          //s.ellipse(x, y, 10, 10);
        }
        s.endShape();

        s.fill(65);
        s.beginShape();
        for (let a = 0; a < s.TWO_PI; a += 0.05) {
          let offset = s.map(s.noise(xoff, this.yoff), 0, 1, -25, 25);
          let r = this.radius2 + offset;
          let x = r * s.cos(a);
          let y = r * s.sin(a);
          s.vertex(x, y);
          xoff += 0.1;
        }
        s.endShape(s.CLOSE);

        this.yoff += 0.01;

      };

      s.windowResized = () => {
        s.createCanvas(s.windowWidth, s.windowHeight).parent('canvasContainer');
        // TODO: check why the window size is wrong 
        this.setupGrid(0, 0, 15, s.windowWidth, s.windowHeight);
      };


    };

    let canvas = new p5(sketch);
  }

}
