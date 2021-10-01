import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongressAgendaComponent } from './congress-agenda.component';

const routes: Routes = [
  {
    path: '',
    component: CongressAgendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongressAgendaRoutingModule { }
