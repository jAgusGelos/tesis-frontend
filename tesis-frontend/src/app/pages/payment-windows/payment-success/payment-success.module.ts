import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentSuccessRoutingModule } from './payment-success-routing.module';
import { PaymentSuccessComponent } from './payment-success.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [PaymentSuccessComponent],
  imports: [
    CommonModule,
    PaymentSuccessRoutingModule,
    CoreModule
  ]
})
export class PaymentSuccessModule { }
