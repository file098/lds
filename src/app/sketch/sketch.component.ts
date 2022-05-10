import {  Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as p5 from 'p5';

@Component({
	selector: 'sketch',
	templateUrl: './sketch.component.html',
	styleUrls: ['./sketch.component.scss'],
})

export class SketchComponent implements OnInit, OnDestroy {

	private sketch!: p5;
	private skip = window.innerWidth / 30;
	private vehicles: any[] = [];
	@Input() init!: (element: ElementRef<HTMLElement>) => p5;
	@ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLElement>;

	constructor() {}

	ngOnInit() {

		const sketch = (s: any) => {

			class Vehicle {

				target: any;
				pos: any;
				vel: any;
				acc: any;
				r: number;
				maxspeed: number;
				maxforce: number;
				distance: number;
				color: { r: number; g: number; b: number; };

				constructor(x: number, y: number) {
					//this.pos = createVector(random(width), random(height));
					this.target = s.createVector(x, y);
					this.pos = s.createVector(s.width / 2, s.height / 2);
					this.vel = p5.Vector.random2D();
					this.acc = s.createVector();
					this.r = 5;
					this.maxspeed = 10;
					this.maxforce = 0.3;
					this.distance = 75;
					this.color = { r: 255, g: 255, b: 255 };
				}

				behaviors() {
					var arrive = this.arrive(this.target);
					var mouse = s.createVector(s.mouseX, s.mouseY);
					var flee = this.flee(mouse);


					arrive.mult(1);
					flee.mult(5);

					this.applyForce(arrive);
					this.applyForce(flee);
				};

				applyForce(f: number | p5.Vector) {
					this.acc.add(f);
				};

				update() {
					this.pos.add(this.vel);
					this.vel.add(this.acc);
					this.acc.mult(0);
				};

				show(size: number) {
					s.stroke(this.color.r, this.color.g, this.color.b);
					s.strokeWeight(this.r);
					s.ellipse(this.pos.x, this.pos.y, size)
				};

				arrive(target: p5.Vector) {
					var desired = p5.Vector.sub(target, this.pos);
					var d = desired.mag();
					var speed = this.maxspeed;
					if (d < 100) {
						speed = s.map(d, 0, 100, 0, this.maxspeed);
					}
					desired.setMag(speed);
					var steer = p5.Vector.sub(desired, this.vel);
					steer.limit(this.maxforce);
					return steer;
				};

				flee(target: p5.Vector) {
					var desired = p5.Vector.sub(target, this.pos);
					var d = desired.mag();
					if (d < this.distance) {
						desired.setMag(this.maxspeed);
						desired.mult(-1);
						var steer = p5.Vector.sub(desired, this.vel);
						steer.limit(this.maxforce);
						if (s.mouseIsPressed) {
							this.changeColor(s.createVector(s.mouseX, s.mouseY))
						}
						else {
							this.setColor(255, 255, 255);
						}
						return steer;
					} else {
						return s.createVector(0, 0);
					}
				}

				setColor(r: number, g: number, b: number) {
					this.color = {
						r: r,
						g: g,
						b: b
					}
				}

				changeColor(mousePosition: p5.Vector) {
					let d = p5.Vector.sub(mousePosition, this.pos);
					let magnitude = d.mag();
					const main = 200;
					const support = 50;
					let r = s.map(magnitude, 0, support, 0, 255);
					let g = s.map(magnitude, 0, main, 0, 255);
					let b = s.map(magnitude, 0, support, 0, 255);
					this.setColor(r, g, b);
				}
			}

			function generatePoints(skip: number) {
				let points = [];

				for (let y = 10; y < s.windowHeight; y += skip) {
					for (let x = 10; x < s.windowWidth; x += skip) {
						points.push(new Vehicle(x, y));
					}
				}

				return points;
			}

			s.setup = () => {
				s.createCanvas(s.windowWidth, s.windowHeight).parent('canvasContainer');
				s.pixelDensity(1)

				this.vehicles = generatePoints(this.skip);
			}

			s.draw = () => {
				s.background('#3c3c3c');
				for (var i = 0; i < this.vehicles.length; i++) {
					var v = this.vehicles[i];
					v.behaviors();
					v.update();
					let size = s.map(s.width, 0, 1920, 0.3, 5);
					v.show(size);
				}
			}

			s.windowResized = () => {
				s.createCanvas(s.windowWidth, s.windowHeight).parent('canvasContainer');
				this.vehicles = generatePoints(this.skip);
			}

		};

		this.sketch = new p5(sketch);
	}

	// I need to remove the sketch that was created before otherwise damage on performance
	ngOnDestroy(): void {
		this.sketch.remove();
	}

	refresh = () => {
		this.sketch.remove();
		this.sketch = this.init(this.canvas);
	}

}