import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionFisicaComponent } from './inscripcion-fisica.component';

const routes: Routes = [{
  path: '',
  component: InscripcionFisicaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionFisicaRoutingModule { }
