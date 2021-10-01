import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateListComponent } from './evaluate-list.component';

describe('EvaluateListComponent', () => {
  let component: EvaluateListComponent;
  let fixture: ComponentFixture<EvaluateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
