import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerScheduleComponent } from './ver-schedule.component';

const routes: Routes = [{
  path: ':id',
  component: VerScheduleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerScheduleRoutingModule { }
