import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntuarEvaluadoresComponent } from './puntuar-evaluadores.component';

const routes: Routes = [{
  path: '',
  component: PuntuarEvaluadoresComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntuarEvaluadoresRoutingModule { }
