import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComiteAcademicoComponent } from './comite-academico.component';

const routes: Routes = [{
  path:'',
  component: ComiteAcademicoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComiteAcademicoRoutingModule { }
