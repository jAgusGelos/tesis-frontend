import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressAgendaComponent } from './congress-agenda.component';

describe('CongressAgendaComponent', () => {
  let component: CongressAgendaComponent;
  let fixture: ComponentFixture<CongressAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongressAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
