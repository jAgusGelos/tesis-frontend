import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlBoardComponent } from './control-board.component';

const routes: Routes = [
  {
    path: '',
    component: ControlBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlBoardRoutingModule { }
