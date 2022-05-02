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
    document.querySelectorAll('.home-titles').forEach(link => {
      link.addEventListener("click", () => {
        //document.querySelector('.work-container')!.scrollIntoView({ behavior: 'smooth', block: 'start'});
      });
    })

  }

  redirectClick(event: MouseEvent): void {
    console.log()
   
  }

}

