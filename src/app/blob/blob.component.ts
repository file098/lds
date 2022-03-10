import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss']
})
export class BlobComponent implements OnInit {

  radius = 200;
  xoff = 0.0;
  yoff = 0.0;

  constructor() { }

  ngOnInit() {
    const sketch = (s:any) => {

      s.setup = () => {

        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.parent('canvasContainer');
      };

      s.draw = () => {

        s.background(255)      
        s.translate(s.width / 2, s.height / 2);
        s.fill(255);

        this.xoff += 0.01;

        s.beginShape();
        let xoff = 0;
        for (let a = 0; a < s.TWO_PI; a += 0.1) {

          let offset = s.map(s.noise(xoff, this.yoff), 0, 1, -25, 25);
          let r = this.radius + offset;
          let x = r * s.cos(a);
          let y = r * s.sin(a);
          //s.vertex(x, y);
          xoff += 0.1;
          s.ellipse(x, y, 10, 10);
        }
        s.endShape();

        this.yoff += 0.01;

      };
    }

    let canvas = new p5(sketch);
  }

}
