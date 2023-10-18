import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {forecastResolver} from "./views/forecasts/resolvers/forecast.resolver";

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
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {});