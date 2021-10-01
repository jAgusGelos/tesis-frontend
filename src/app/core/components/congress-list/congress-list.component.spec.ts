import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressListComponent } from './congress-list.component';

describe('CongressListComponent', () => {
  let component: CongressListComponent;
  let fixture: ComponentFixture<CongressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
