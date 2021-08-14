import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersBySymposiumComponent } from './papers-by-symposium.component';

describe('PapersBySymposiumComponent', () => {
  let component: PapersBySymposiumComponent;
  let fixture: ComponentFixture<PapersBySymposiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapersBySymposiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersBySymposiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
