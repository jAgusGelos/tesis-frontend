import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedAccountComponent } from './confirmed-account.component';

const routes: Routes = [
  {
    path:'',
    component: ConfirmedAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmedAccountRoutingModule { }
