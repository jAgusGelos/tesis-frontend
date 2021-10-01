import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PapersBySymposiumComponent } from './papers-by-symposium.component';

const routes: Routes = [{
  path: '',
  component: PapersBySymposiumComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PapersBySymposiumRoutingModule { }
