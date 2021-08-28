import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationDetailComponent } from './evaluation-detail.component';

const routes: Routes = [{
  path: '',
  component: EvaluationDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationDetailRoutingModule { }
