import { TestBed } from '@angular/core/testing';

import { SuperRolGuard } from './super-rol.guard';

describe('SuperRolGuard', () => {
  let guard: SuperRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
