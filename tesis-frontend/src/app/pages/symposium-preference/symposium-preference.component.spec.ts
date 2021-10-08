import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiumPreferenceComponent } from './symposium-preference.component';

describe('SymposiumPreferenceComponent', () => {
  let component: SymposiumPreferenceComponent;
  let fixture: ComponentFixture<SymposiumPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymposiumPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymposiumPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
