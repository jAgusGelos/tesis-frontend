import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiumComponent } from './symposium.component';

describe('SymposiumComponent', () => {
  let component: SymposiumComponent;
  let fixture: ComponentFixture<SymposiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymposiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymposiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
