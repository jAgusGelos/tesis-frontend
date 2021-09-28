import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorePasswordRoutingModule } from './restore-password-routing.module';
import { RestorePasswordComponent } from './restore-password.component';


@NgModule({
  declarations: [RestorePasswordComponent],
  imports: [
    CommonModule,
    RestorePasswordRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RestorePasswordModule { }
