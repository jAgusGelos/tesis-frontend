import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompletedDataComponent } from './user-completed-data.component';

describe('UserCompletedDataComponent', () => {
  let component: UserCompletedDataComponent;
  let fixture: ComponentFixture<UserCompletedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompletedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompletedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
