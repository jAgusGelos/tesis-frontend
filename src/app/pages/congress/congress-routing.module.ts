import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongressComponent } from './congress.component';

const routes: Routes = [
  {
    path: '',
    component: CongressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongressRoutingModule { }
