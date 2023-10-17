import {
	AfterContentInit,
	Component,
	ContentChildren,
	DestroyRef,
	EventEmitter,
	inject,
	Output,
	QueryList
} from '@angular/core';
import {TabPanelComponent} from "./tab-panel/tab-panel.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {delay, startWith, tap} from "rxjs/operators";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css'],
	standalone: true,
	imports: [TabPanelComponent, NgForOf, NgClass, NgIf],
})
export class TabsComponent implements AfterContentInit {
	private destroyRef = inject(DestroyRef);
	public tabs: TabPanelComponent[];
	public currentTabIndex = 0;

	@ContentChildren(TabPanelComponent)
	public tabPanels: QueryList<TabPanelComponent>;

	@Output()
	public close = new EventEmitter<number>();

	public closeTab(index: number, tab: TabPanelComponent): void {
		this.close.emit(index);
		tab.closed = true;
		this.currentTabIndex = Math.max(index - 1, 0);
		if (!tab.selected) {
			return;
		}
		this.tabs[this.currentTabIndex].selected = true;
	}

	private updateTabs(): void {
		if (this.tabPanels?.length === 0) {
			return;
		}
		this.tabs = this.tabPanels.toArray();

		if (this.tabs.every((tab) => !tab.selected)) {
			this.tabs[this.currentTabIndex].selected = true;
		}
	}

	public ngAfterContentInit(): void {
		this.tabPanels.changes
			.pipe(
				startWith(''),
				delay(0),
				tap(() => this.updateTabs()),
				takeUntilDestroyed(this.destroyRef)
			)
			.subscribe()
	}

	public showTabPanel(event: Event, tab: TabPanelComponent): void {
		event.preventDefault();
		this.show(tab);
	}

	private show(tab: TabPanelComponent): void {
		this.tabPanels.forEach((tabPanel, index): void => {
			if (tabPanel === tab) {
				tabPanel.selected = true;
				this.currentTabIndex = index;
				return;
			}
			tabPanel.selected = false;
		});
	}
}
