import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss']
})
export class BlobComponent implements OnInit {

  radius = 100;

  constructor() { }

  ngOnInit() {
    const sketch = (s:any) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {

        var cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.parent('canvasContainer');
      };

      s.draw = () => {
        s.background(205);
        
        s.rectMode(s.CENTER);
        s.translate(s.width / 2, s.height / 2);

        s.beginShape()
        for (let a = 0; a < s.TWO_PI; a += 0.1){
          let offset = this.radius + s.map(a, this.radius, s.TWO_PI, 0, 10);

          let x = offset * s.cos(a);
          let y = offset * s.sin(a);
          s.vertex(x, y);
        }
        s.endShape(s.CLOSE);
      };
    }

    let canvas = new p5(sketch);
  }

}
