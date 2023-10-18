import {Component, Signal} from '@angular/core';
import {Condition} from "../../shared/components/condition-card/condition-card.component.typings";
import {ZipcodeEntryComponent} from "../../shared/components/zipcode-entry/zipcode-entry.component";
import {TabsComponent} from "../../shared/components/tabs/tabs.component";
import {ConditionCardComponent} from "../../shared/components/condition-card/condition-card.component";
import {TabPanelComponent} from "../../shared/components/tabs/tab-panel/tab-panel.component";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ConditionTabLabelPipe} from "../../shared/pipes/condition-tab-label.pipe";
import {RouterLink} from "@angular/router";
import {CurrentConditionsService} from "./current-conditions.service";

@Component({
	selector: 'app-current-conditions',
	templateUrl: './current-conditions.component.html',
	styleUrls: ['./current-conditions.component.css'],
	standalone: true,
	viewProviders: [CurrentConditionsService],
	imports: [
		ZipcodeEntryComponent,
		TabsComponent,
		ConditionCardComponent,
		TabPanelComponent,
		NgForOf,
		JsonPipe,
		ConditionTabLabelPipe,
		NgIf,
		RouterLink
	]
})
export class CurrentConditionsComponent {
	public message: Signal<string> = this.currentConditionsService.errorMessage;
	public conditions: Signal<Condition[]> = this.currentConditionsService.conditions;

	constructor(private currentConditionsService: CurrentConditionsService) {
	}

	public trackConditions(index: number, condition: Condition): string {
		return condition.zipcode;
	}

	public addLocation(zipcode: string): void {
		this.currentConditionsService.addLocation(zipcode)
	}

	public removeLocation(index: number): void {
		this.currentConditionsService.removeLocation(index);
	}

	public navigate(event: MouseEvent, zipcode: string): void {
		// Avoid double navigation when clicking on link
		if (event.target instanceof HTMLAnchorElement) {
			return;
		}
		this.currentConditionsService.navigate(zipcode).subscribe();
	}
}
