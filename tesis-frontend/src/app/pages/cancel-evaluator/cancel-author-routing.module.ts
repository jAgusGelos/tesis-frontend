import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelEvaluatorComponent } from './cancel-evaluator.component';

const routes: Routes = [{
  path: '',
  component: CancelEvaluatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelEvaluatorRoutingModule { }
