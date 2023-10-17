import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {forecastResolver} from "./views/forecasts/forecast.resolver";

const appRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./views/current-conditions/current-conditions.component').then(c => c.CurrentConditionsComponent)
	},
	{
		path: 'forecast/:zipcode',
		resolve: {
			forecast: forecastResolver,
		},
		loadComponent: () => import('./views/forecasts/forecasts.component').then(c => c.ForecastsComponent)
	}
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {});