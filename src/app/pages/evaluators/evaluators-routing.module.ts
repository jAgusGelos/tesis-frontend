import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluatorsComponent } from './evaluators.component';

const routes: Routes = [{
  path: '',
  component: EvaluatorsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluatorsRoutingModule { }
