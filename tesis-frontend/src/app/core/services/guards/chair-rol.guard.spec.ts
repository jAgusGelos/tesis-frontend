import { TestBed } from '@angular/core/testing';

import { ChairRolGuard } from './chair-rol.guard';

describe('ChairRolGuard', () => {
  let guard: ChairRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChairRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
