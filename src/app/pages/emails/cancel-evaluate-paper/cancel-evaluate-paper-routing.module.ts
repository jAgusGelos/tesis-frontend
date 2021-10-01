import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelEvaluatePaperComponent } from './cancel-evaluate-paper.component';

const routes: Routes = [
  {
    path:'',
    component:CancelEvaluatePaperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelEvaluatePaperRoutingModule { }
