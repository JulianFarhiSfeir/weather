import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ZipcodeEntryValidatorsService} from "./zipcode-entry-validators.service";
import {NgClass, NgIf} from "@angular/common";
import {FormErrorsMessagePipe} from "../../pipes/form-errors-message.pipe";
import {ZipcodeEntryForm} from "./zipcode-entry.typings";

@Component({
	selector: 'app-zipcode-entry',
	templateUrl: './zipcode-entry.component.html',
	styleUrls: ['./zipcode-entry.component.css'],
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		NgIf,
		FormErrorsMessagePipe,
		NgClass
	],
	viewProviders: [ZipcodeEntryValidatorsService]
})
export class ZipcodeEntryComponent {
	@Output()
	public addLocation: EventEmitter<string> = new EventEmitter<string>();

	public form: FormGroup<ZipcodeEntryForm> = new FormGroup<ZipcodeEntryForm>({
		zipcode: new FormControl('', [
			this.validators.alreadyExist(),
			this.validators.length(5),
			this.validators.required()
		])
	});

	constructor(private validators: ZipcodeEntryValidatorsService) {
	}

	public submit(): void {
		const zipcode = this.form.value.zipcode;
		this.addLocation.emit(zipcode);
		this.form.reset();
	}
}
