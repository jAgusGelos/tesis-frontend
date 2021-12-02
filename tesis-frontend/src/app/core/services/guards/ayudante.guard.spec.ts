import { TestBed } from '@angular/core/testing';

import { AyudanteGuard } from './ayudante.guard';

describe('AyudanteGuard', () => {
  let guard: AyudanteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AyudanteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
