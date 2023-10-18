import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { forecastResolver } from './forecast.resolver';

describe('forecastsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => forecastResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
