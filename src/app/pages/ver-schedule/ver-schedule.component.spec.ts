import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerScheduleComponent } from './ver-schedule.component';

describe('VerScheduleComponent', () => {
  let component: VerScheduleComponent;
  let fixture: ComponentFixture<VerScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
