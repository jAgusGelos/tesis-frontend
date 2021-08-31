import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatePapersChairSecComponent } from './evaluate-papers-chair-sec.component';

describe('EvaluatePapersChairSecComponent', () => {
  let component: EvaluatePapersChairSecComponent;
  let fixture: ComponentFixture<EvaluatePapersChairSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatePapersChairSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatePapersChairSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
