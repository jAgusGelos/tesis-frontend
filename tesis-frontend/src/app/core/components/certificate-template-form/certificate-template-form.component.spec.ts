import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplateFormComponent } from './certificate-template-form.component';

describe('CertificateTemplateFormComponent', () => {
  let component: CertificateTemplateFormComponent;
  let fixture: ComponentFixture<CertificateTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateTemplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
