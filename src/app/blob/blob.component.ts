import { AfterViewChecked, Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss'],
})
export class BlobComponent implements OnInit, AfterViewChecked {
  radius = 250;
  radius2 = 150;
  xoff = 0.0;
  yoff = 0.0;
  headerWrapperHeight = 0;

  constructor() { }

  ngAfterViewChecked(): void {
  }

  ngOnInit() {

    const header = document.querySelector('#header-wrapper');
    if(header){ this.headerWrapperHeight = header.clientHeight; }

    const sketch = (s: any) => {
      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight).parent('canvasContainer');
      };

      s.windowResized = () => {
        s.createCanvas(s.windowWidth, s.windowHeight).parent('canvasContainer');
      };

      s.draw = () => {
        s.background(255);
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


      
    };

    let canvas = new p5(sketch);
  }

}
