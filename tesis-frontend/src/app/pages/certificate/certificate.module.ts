import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateComponent } from './certificate.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    CertificateComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    CoreModule
  ]
})
export class CertificateModule { }
