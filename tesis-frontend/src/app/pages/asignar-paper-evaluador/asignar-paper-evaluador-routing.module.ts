import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPaperEvaluadorComponent } from './asignar-paper-evaluador.component';

const routes: Routes = [{
  path: '',
  component: AsignarPaperEvaluadorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignarPaperEvaluadorRoutingModule { }
