import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluatorComponent } from './evaluator.component';

const routes: Routes = [{
  path: '',
  component: EvaluatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluatorRoutingModule { }
