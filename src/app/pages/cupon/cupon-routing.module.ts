import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuponComponent } from './cupon.component';

const routes: Routes = [{
  path: '',
  component: CuponComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuponRoutingModule { }
