import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateArticleComponent } from './evaluate-article.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluateArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluateArticleRoutingModule { }
