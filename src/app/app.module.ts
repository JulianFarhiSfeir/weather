import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NgOptimizedImage} from "@angular/common";
import {TabPanelComponent} from "./shared/components/tabs/tab-panel/tab-panel.component";
import {WeatherApiInterceptor} from "./core/api/weather-api.interceptor";
import { FormErrorsMessagePipe } from './shared/pipes/form-errors-message.pipe';

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
		NgOptimizedImage,
		TabPanelComponent
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
