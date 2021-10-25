import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentFailureRoutingModule } from './payment-failure-routing.module';
import { PaymentFailureComponent } from './payment-failure.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [PaymentFailureComponent],
  imports: [
    CommonModule,
    PaymentFailureRoutingModule,
    CoreModule
  ]
})
export class PaymentFailureModule { }
