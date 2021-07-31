import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallForPapersComponent } from './call-for-papers.component';

const routes: Routes = [
  {
    path: '',
    component: CallForPapersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallForPapersRoutingModule { }
