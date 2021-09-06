import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressCardComponent } from './congress-card.component';

describe('CongressCardComponent', () => {
  let component: CongressCardComponent;
  let fixture: ComponentFixture<CongressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongressCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
