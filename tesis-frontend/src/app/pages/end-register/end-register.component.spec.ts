import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndRegisterComponent } from './end-register.component';

describe('EndRegisterComponent', () => {
  let component: EndRegisterComponent;
  let fixture: ComponentFixture<EndRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
