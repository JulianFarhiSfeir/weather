import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastsListComponent } from './forecasts-list.component';

describe('ForecastsListComponent', () => {
  let component: ForecastsListComponent;
  let fixture: ComponentFixture<ForecastsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastsListComponent]
    });
    fixture = TestBed.createComponent(ForecastsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
