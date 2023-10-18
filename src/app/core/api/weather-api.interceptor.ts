import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class WeatherApiInterceptor implements HttpInterceptor {
	public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (!request.url.includes(environment.weatherApiBaseUrl)) {
			return next.handle(request);
		}
		let params: HttpParams = request.params.set('APPID', environment.weatherApiId);
		const clonedRequest = request.clone({
			params
		})
		return next.handle(clonedRequest);
	}
}
