import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDetailFormComponent } from './certificate-detail-form.component';

describe('CertificateDetailFormComponent', () => {
  let component: CertificateDetailFormComponent;
  let fixture: ComponentFixture<CertificateDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
