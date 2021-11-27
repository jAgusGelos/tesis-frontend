import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeListComponent } from './sede-list.component';

describe('SedeListComponent', () => {
  let component: SedeListComponent;
  let fixture: ComponentFixture<SedeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
