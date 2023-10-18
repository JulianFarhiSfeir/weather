import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocationService {
	private LOCATIONS_STORAGE_KEY = 'locations';
	private locations: Set<string> = new Set<string>();

	constructor() {
		let locationsString = localStorage.getItem(this.LOCATIONS_STORAGE_KEY);
		if (locationsString){
			const locations: string[] = JSON.parse(locationsString);
			locations.forEach((location) => this.locations.add(location));
		}
	}

	public addLocation(zipcode: string) {
		if (this.locations.has(zipcode)) {
			return;
		}
		this.locations.add(zipcode);
		localStorage.setItem(this.LOCATIONS_STORAGE_KEY, JSON.stringify(Array.from(this.locations)));
	}

	public removeLocation(zipcode: string): void {
		if (!this.locations.has(zipcode)) {
			return;
		}
		this.locations.delete(zipcode);
		localStorage.setItem(this.LOCATIONS_STORAGE_KEY, JSON.stringify(Array.from(this.locations)));
	}

	public getLocations(): string[] {
		return Array.from(this.locations);
	}

	public has(zipcode: string): boolean {
		return this.locations.has(zipcode);
	}
}
