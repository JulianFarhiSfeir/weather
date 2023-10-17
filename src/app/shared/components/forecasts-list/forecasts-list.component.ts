import {Component, Input} from '@angular/core';
import {DatePipe, DecimalPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {Forecast} from "./forecast-list.typings";

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
  imports: [
    DatePipe,
    DecimalPipe,
    NgOptimizedImage,
    NgForOf
  ],
  standalone: true
})
export class ForecastsListComponent {
  @Input()
  public forecasts: Forecast[];
}
