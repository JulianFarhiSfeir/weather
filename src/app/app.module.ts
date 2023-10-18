import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {WeatherApiInterceptor} from "./core/api/weather-api.interceptor";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		routing,
		ServiceWorkerModule.register('/weather/ngsw-worker.js', {enabled: environment.production}),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: WeatherApiInterceptor,
			multi: true,
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
