import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionPublicaCongresoComponent } from './informacion-publica-congreso.component';

const routes: Routes = [{
  path: '',
  component: InformacionPublicaCongresoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionPublicaCongresoRoutingModule { }
