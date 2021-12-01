import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplateListComponent } from './certificate-template-list.component';

describe('CertificateTemplateListComponent', () => {
  let component: CertificateTemplateListComponent;
  let fixture: ComponentFixture<CertificateTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateTemplateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
