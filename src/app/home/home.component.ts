import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).on("mousemove", function (e) {

      const x = e.pageX - 45;
      const y = e.pageY - 45;

      $('#circle').css({
        left: x,
        top: y
      });
    });
    
  }

  

}

