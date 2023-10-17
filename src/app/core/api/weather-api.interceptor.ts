import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class WeatherApiInterceptor implements HttpInterceptor {

	constructor() {
	}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (!request.url.includes(environment.weatherApiBaseUrl)) {
			return next.handle(request);
		}
		let params = request.params.set('APPID', environment.weatherApiId);
		const clonedRequest = request.clone({
			params
		})
		return next.handle(clonedRequest);
	}
}