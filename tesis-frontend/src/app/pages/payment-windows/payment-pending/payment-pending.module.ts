import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentPendingRoutingModule } from './payment-pending-routing.module';
import { PaymentPendingComponent } from './payment-pending.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [PaymentPendingComponent],
  imports: [
    CommonModule,
    PaymentPendingRoutingModule,
    CoreModule
  ]
})
export class PaymentPendingModule { }
