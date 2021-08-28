import { TestBed } from '@angular/core/testing';

import { EvaluationDetailService } from './evaluation-detail.service';

describe('EvaluationDetailService', () => {
  let service: EvaluationDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
