import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperReadyComponent } from './paper-ready.component';

describe('PaperReadyComponent', () => {
  let component: PaperReadyComponent;
  let fixture: ComponentFixture<PaperReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
