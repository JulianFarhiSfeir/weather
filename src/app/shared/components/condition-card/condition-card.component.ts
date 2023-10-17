import {Component, EventEmitter, HostListener, inject, Input, Output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Condition} from "./condition-card.component.typings";
import {DecimalPipe, NgOptimizedImage, TitleCasePipe} from "@angular/common";

@Component({
	selector: 'app-condition-card',
	templateUrl: './condition-card.component.html',
	styleUrls: ['./condition-card.component.css'],
	standalone: true,
	imports: [
		RouterLink,
		TitleCasePipe,
		NgOptimizedImage,
		DecimalPipe
	]
})
export class ConditionCardComponent {
	private router = inject(Router);


	@Input()
	public condition: Condition;

	@Output()
	public clickEventEmitter = new EventEmitter<string>();

	@HostListener('click')
	public click() {
		this.clickEventEmitter.emit(this.condition.zipCode);
		this.showForecast(this.condition.zipCode);
	}

	// todo
	showForecast(zipcode: string) {
		this.router.navigate(['/forecast', zipcode])
	}
}
