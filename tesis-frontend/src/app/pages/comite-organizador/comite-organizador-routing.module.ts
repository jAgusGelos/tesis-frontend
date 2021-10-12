import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComiteOrganizadorComponent } from './comite-organizador.component';

const routes: Routes = [{
  path:'',
  component: ComiteOrganizadorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComiteOrganizadorRoutingModule { }
