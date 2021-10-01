import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelAuthorComponent } from './cancel-author.component';

const routes: Routes = [{
  path: '',
  component: CancelAuthorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelAuthorRoutingModule { }
