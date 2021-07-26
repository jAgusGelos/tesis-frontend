import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChairsComponent } from './chairs.component';

const routes: Routes = [
  {
    path: '',
    component: ChairsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class ChairsRoutingModule { }
