import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelSecChairComponent } from './cancel-sec-chair.component';

const routes: Routes = [{
  path: '',
  component: CancelSecChairComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelSecChairRoutingModule { }
