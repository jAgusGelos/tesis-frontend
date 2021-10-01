import { TestBed } from '@angular/core/testing';

import { EvaluatorRolGuard } from './evaluator-rol.guard';

describe('EvaluatorRolGuard', () => {
  let guard: EvaluatorRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EvaluatorRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
