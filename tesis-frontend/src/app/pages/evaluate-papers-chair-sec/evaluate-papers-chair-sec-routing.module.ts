import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluatePapersChairSecComponent } from './evaluate-papers-chair-sec.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluatePapersChairSecComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluatePapersChairSecRoutingModule { }
