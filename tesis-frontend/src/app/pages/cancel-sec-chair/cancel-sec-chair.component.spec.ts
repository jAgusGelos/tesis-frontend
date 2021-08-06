import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSecChairComponent } from './cancel-sec-chair.component';

describe('CancelSecChairComponent', () => {
  let component: CancelSecChairComponent;
  let fixture: ComponentFixture<CancelSecChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelSecChairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSecChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
