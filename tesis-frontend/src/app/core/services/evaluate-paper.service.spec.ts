import { TestBed } from '@angular/core/testing';

import { EvaluatePaperService } from './evaluate-paper.service';

describe('EvaluatePaperService', () => {
  let service: EvaluatePaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluatePaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
