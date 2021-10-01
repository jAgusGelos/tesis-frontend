import { TestBed } from '@angular/core/testing';

import { SymposiumService } from './symposium.service';

describe('SymposiumService', () => {
  let service: SymposiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymposiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
