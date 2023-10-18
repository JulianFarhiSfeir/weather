import {computed, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {WeatherManagerService} from "../../core/weather-manager.service";
import {Condition} from "../../shared/components/condition-card/condition-card.component.typings";
import {catchError, delay, tap} from "rxjs/operators";
import {from, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {ConditionsAndZip} from "../../core/weather-manager.typings";

@Injectable({
	providedIn: 'root'
})
export class CurrentConditionsService {
	private message: WritableSignal<string> = signal('');
	private currentConditionsByZip: Signal<Condition[]> = computed(() => {
		const currentConditions: Partial<ConditionsAndZip>[] = this.weatherManager.getCurrentConditions()();
		return currentConditions.map((currentCondition) => new Condition({
			name: currentCondition.data.name,
			main: currentCondition.data.weather[0].main,
			zipcode: currentCondition.zipcode,
			temp: {
				current: currentCondition.data.main.temp,
				min: currentCondition.data.main.temp_min,
				max: currentCondition.data.main.temp_max
			},
			icon: this.weatherManager.getWeatherIcon(currentCondition.data.weather[0].id)
		}));
	});
	public conditions: Signal<Condition[]> = this.currentConditionsByZip;
	public errorMessage: Signal<string> = this.message.asReadonly();

	constructor(
		private weatherManager: WeatherManagerService,
		private router: Router
	) {
	}

	public removeLocation(index: number): void {
		const condition = this.currentConditionsByZip().find((condition, i) => i === index);
		if (!condition) {
			return;
		}
		this.weatherManager.removeCurrentConditions(condition.zipcode);
	}

	public addLocation(zipcode: string): void {
		this.weatherManager
			.addCurrentConditions(zipcode)
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

	public navigate(zipcode: string): Observable<boolean> {
		return from(this.router.navigate(['/forecast', zipcode]))
	}
}
