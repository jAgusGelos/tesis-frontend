import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateComponent } from './certificate.component';


@NgModule({
  declarations: [
    CertificateComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule
  ]
})
export class CertificateModule { }
