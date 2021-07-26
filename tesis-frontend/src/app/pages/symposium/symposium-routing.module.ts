import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymposiumComponent } from './symposium.component';

const routes: Routes = [
  {
    path: '',
    component: SymposiumComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymposiumRoutingModule { }
