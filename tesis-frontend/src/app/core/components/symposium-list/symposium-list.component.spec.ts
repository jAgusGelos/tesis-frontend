import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiumListComponent } from './symposium-list.component';

describe('SymposiumListComponent', () => {
  let component: SymposiumListComponent;
  let fixture: ComponentFixture<SymposiumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymposiumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymposiumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
