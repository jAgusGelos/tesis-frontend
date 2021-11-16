import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAssistantComponent } from './accept-assistant.component';

describe('AcceptAssistantComponent', () => {
  let component: AcceptAssistantComponent;
  let fixture: ComponentFixture<AcceptAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
