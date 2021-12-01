import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProximoEventoComponent } from './proximo-evento.component';

const routes: Routes = [{
  path: '',
  component: ProximoEventoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProximoEventoRoutingModule { }
