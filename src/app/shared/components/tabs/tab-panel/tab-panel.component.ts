import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
	selector: 'app-tab-panel',
	templateUrl: './tab-panel.component.html',
	styleUrls: ['./tab-panel.component.css'],
	standalone: true,
	imports: [
		NgIf
	],
})
export class TabPanelComponent {
	@Input()
	public selected: boolean = false;

	@Input()
	public header: string;

	public closed: boolean = false;
}
