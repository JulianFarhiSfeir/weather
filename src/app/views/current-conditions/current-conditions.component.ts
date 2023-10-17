import {Component, computed, signal, Signal} from '@angular/core';
import {WeatherManagerService} from "../../core/weather-manager.service";
import {Condition} from "../../shared/components/condition-card/condition-card.component.typings";
import {ZipcodeEntryComponent} from "../../shared/components/zipcode-entry/zipcode-entry.component";
import {TabsComponent} from "../../shared/components/tabs/tabs.component";
import {ConditionCardComponent} from "../../shared/components/condition-card/condition-card.component";
import {TabPanelComponent} from "../../shared/components/tabs/tab-panel/tab-panel.component";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ConditionTabLabelPipe} from "../../shared/pipes/condition-tab-label.pipe";
import {catchError, delay, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
	selector: 'app-current-conditions',
	templateUrl: './current-conditions.component.html',
	styleUrls: ['./current-conditions.component.css'],
	standalone: true,
	imports: [
		ZipcodeEntryComponent,
		TabsComponent,
		ConditionCardComponent,
		TabPanelComponent,
		NgForOf,
		JsonPipe,
		ConditionTabLabelPipe,
		NgIf
	]
})
export class CurrentConditionsComponent {
	public message = signal('');
	constructor(private weatherManager: WeatherManagerService) {
	}

	public currentConditionsByZip: Signal<Condition[]> = computed(() => {
		const currentConditions = this.weatherManager.getCurrentConditions()();
		return currentConditions.map((currentCondition) => new Condition({
			name: currentCondition.data.name,
			main: currentCondition.data.weather[0].main,
			zipCode: currentCondition.zipcode,
			temp: {
				current: currentCondition.data.main.temp,
				min: currentCondition.data.main.temp_min,
				max: currentCondition.data.main.temp_max
			},
			icon: this.weatherManager.getWeatherIcon(currentCondition.data.weather[0].id)
		}));
	})
	public trackConditions(index: number, condition: Condition) {
		return condition.zipCode;
	}

	public addLocation(zipCode: string): void {
		this.weatherManager
			.addCurrentConditions(zipCode)
			.pipe(
				catchError((error) => {
					return of(error)
						.pipe(
							tap(() => this.message.set(error.message)),
							delay(3000),
							tap(() => this.message.set(''))
						)
				})
			)
			.subscribe()
	}

	public removeLocation(index: number) {
		const condition = this.currentConditionsByZip().find((condition, i) => i === index);
		if (!condition) {
			return;
		}
		this.weatherManager.removeCurrentConditions(condition.zipCode);
	}
}
