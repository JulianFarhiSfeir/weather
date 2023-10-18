import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
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
	@Input()
	public condition: Condition;
}
