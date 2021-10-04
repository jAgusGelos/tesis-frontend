import { TestBed } from '@angular/core/testing';

import { ScheduleCalendarService } from './schedule-calendar.service';

describe('ScheduleCalendarService', () => {
  let service: ScheduleCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
