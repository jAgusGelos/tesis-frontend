import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedAccountComponent } from './confirmed-account.component';

describe('ConfirmedAccountComponent', () => {
  let component: ConfirmedAccountComponent;
  let fixture: ComponentFixture<ConfirmedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
