import { TestBed } from '@angular/core/testing';

import { ChairSecondaryRolGuard } from './chair-secondary-rol.guard';

describe('ChairSecondaryRolGuard', () => {
  let guard: ChairSecondaryRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChairSecondaryRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
