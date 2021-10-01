import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverPasswordRoutingModule } from './recover-password-routing.module';
import { RecoverPasswordComponent } from './recover-password.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    CommonModule,
    RecoverPasswordRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecoverPasswordModule { }
