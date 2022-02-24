import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  sticky: boolean = false;

  constructor() { }

  ngOnInit() {

    window.addEventListener('scroll', this.scrollEvent, true);

  }

  ngOnDestroy() {

    window.removeEventListener('scroll', this.scrollEvent, true);

  }

  scrollEvent = (event: any): void => {
    const scrollTop = event.target.scrollingElement.scrollTop;
    scrollTop > 0 ? this.sticky = true : this.sticky = false;
    console.log(this.sticky);
}

}
