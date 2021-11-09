import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPendingComponent } from './payment-pending.component';

const routes: Routes = [{
  path: '',
  component: PaymentPendingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentPendingRoutingModule { }
