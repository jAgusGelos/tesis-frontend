import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatePapersChairSecCardComponent } from './evaluate-papers-chair-sec-card.component';

describe('EvaluatePapersChairSecCardComponent', () => {
  let component: EvaluatePapersChairSecCardComponent;
  let fixture: ComponentFixture<EvaluatePapersChairSecCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatePapersChairSecCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatePapersChairSecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
