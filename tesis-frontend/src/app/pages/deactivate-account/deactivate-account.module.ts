import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeactivateAccountRoutingModule } from './deactivate-account-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { DeactivateAccountComponent } from './deactivate-account.component';


@NgModule({
  declarations: [DeactivateAccountComponent],
  imports: [
    CommonModule,
    DeactivateAccountRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HttpClientModule
  ]
})
export class DeactivateAccountModule { }
