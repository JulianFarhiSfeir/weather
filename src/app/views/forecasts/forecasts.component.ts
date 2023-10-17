import {Component, Signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AsyncPipe, DatePipe, DecimalPipe, NgIf} from "@angular/common";
import {ForecastsListComponent} from "../../shared/components/forecasts-list/forecasts-list.component";
import {Forecasts} from "./forecasts.typings";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
	selector: 'app-forecasts',
	templateUrl: './forecasts.component.html',
	styleUrls: ['./forecasts.component.css'],
	standalone: true,
	imports: [
		DatePipe,
		DecimalPipe,
		RouterLink,
		ForecastsListComponent,
		NgIf,
		AsyncPipe
	]
})
export class ForecastsComponent {
	public forecastsSignal: Signal<Forecasts> = toSignal(this.route.data.pipe(map((data) => data['forecast'])))

	constructor(private route: ActivatedRoute) {
	}
}
