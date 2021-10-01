import { TestBed } from '@angular/core/testing';

import { AssignSecChairThemeService } from './assign-sec-chair-theme.service';

describe('AssignSecChairThemeService', () => {
  let service: AssignSecChairThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignSecChairThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
