import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSecChairsFormComponent } from './assign-sec-chairs-form.component';

describe('AssignSecChairsFormComponent', () => {
  let component: AssignSecChairsFormComponent;
  let fixture: ComponentFixture<AssignSecChairsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignSecChairsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSecChairsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
