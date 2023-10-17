import {ValidatorFn} from "@angular/forms";
import {inject, Injectable} from "@angular/core";
import {LocationService} from "../../../core/location.service";

@Injectable()
export class ZipcodeEntryValidatorsService {
	private locationService = inject(LocationService);

	public alreadyExist(): ValidatorFn {
		return control => {
			const hasZipcode = this.locationService.has(control.value);
			if (hasZipcode) {
				return {
					alreadyExist: 'The zip code entry already exist',
				}
			}

			return null;
		}
	}

	public length(length: number): ValidatorFn {
		return control => {
			const valueLength = control?.value?.length;
			if (control.dirty && valueLength > 0 && valueLength !== length) {
				return {
					length: 'The zip code must be contains 5 characters'
				}
			}
			return null;
		}
	}

	public required(): ValidatorFn {
		return control => {
			if (control.dirty && !control?.value) {
				return {
					required: 'The zip code field has to be filled'
				}
			}
			return null;
		}
	}
}