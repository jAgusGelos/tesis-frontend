import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaListComponent } from './tarifa-list.component';

describe('TarifaListComponent', () => {
  let component: TarifaListComponent;
  let fixture: ComponentFixture<TarifaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
