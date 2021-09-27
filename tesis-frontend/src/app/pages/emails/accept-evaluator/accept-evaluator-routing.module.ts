import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptEvaluatorComponent } from './accept-evaluator.component';

const routes: Routes = [
  {
    path:'',
    component: AcceptEvaluatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceptEvaluatorRoutingModule { }
