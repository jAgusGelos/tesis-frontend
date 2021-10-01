import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptEvaluatorRoutingModule } from '../accept-evaluator/accept-evaluator-routing.module';
import { AcceptEvaluatorComponent } from '../accept-evaluator/accept-evaluator.component';
import { AcceptEvaluatePaperComponent } from './accept-evaluate-paper.component';

const routes: Routes = [
  {
  path:'',
  component: AcceptEvaluatePaperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceptEvaluatePaperRoutingModule { }
