import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateAccountComponent } from './deactivate-account.component';

const routes: Routes = [{
  path: '',
  component: DeactivateAccountComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeactivateAccountRoutingModule { }
