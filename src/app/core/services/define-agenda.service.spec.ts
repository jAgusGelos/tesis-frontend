import { TestBed } from '@angular/core/testing';

import { DefineAgendaService } from './define-agenda.service';

describe('DefineAgendaService', () => {
  let service: DefineAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefineAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
