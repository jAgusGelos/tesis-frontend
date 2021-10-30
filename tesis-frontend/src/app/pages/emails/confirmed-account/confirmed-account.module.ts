import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmedAccountRoutingModule } from './confirmed-account-routing.module';
import { ConfirmedAccountComponent } from './confirmed-account.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ConfirmedAccountComponent],
  imports: [
    CommonModule,
    ConfirmedAccountRoutingModule,
    CoreModule
  ]
})
export class ConfirmedAccountModule { }
