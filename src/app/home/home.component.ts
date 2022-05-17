import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	constructor() { }

	scroll(target: string) {
		if (target) {
			document.querySelector(target)!.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "start"
			});
		}
	}

}
