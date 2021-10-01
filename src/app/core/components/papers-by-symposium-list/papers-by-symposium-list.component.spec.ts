import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersBySymposiumListComponent } from './papers-by-symposium-list.component';

describe('PapersBySymposiumListComponent', () => {
  let component: PapersBySymposiumListComponent;
  let fixture: ComponentFixture<PapersBySymposiumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapersBySymposiumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersBySymposiumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
