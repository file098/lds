import { Component, OnInit } from '@angular/core';

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

