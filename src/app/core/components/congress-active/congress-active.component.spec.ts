import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressActiveComponent } from './congress-active.component';

describe('CongressActiveComponent', () => {
  let component: CongressActiveComponent;
  let fixture: ComponentFixture<CongressActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongressActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
