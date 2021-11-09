import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionAutorComponent } from './revision-autor.component';

describe('RevisionAutorComponent', () => {
  let component: RevisionAutorComponent;
  let fixture: ComponentFixture<RevisionAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
