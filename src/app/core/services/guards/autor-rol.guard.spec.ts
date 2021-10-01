import { TestBed } from '@angular/core/testing';

import { AutorRolGuard } from './autor-rol.guard';

describe('AutorRolGuard', () => {
  let guard: AutorRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutorRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
