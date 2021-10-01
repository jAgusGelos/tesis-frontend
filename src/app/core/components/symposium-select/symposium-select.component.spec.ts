import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiumSelectComponent } from './symposium-select.component';

describe('SymposiumSelectComponent', () => {
  let component: SymposiumSelectComponent;
  let fixture: ComponentFixture<SymposiumSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymposiumSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymposiumSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
