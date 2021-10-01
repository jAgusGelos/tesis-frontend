import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAuthorComponent } from './cancel-author.component';

describe('CancelAuthorComponent', () => {
  let component: CancelAuthorComponent;
  let fixture: ComponentFixture<CancelAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
