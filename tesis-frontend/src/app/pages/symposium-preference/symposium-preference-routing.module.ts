import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymposiumPreferenceComponent } from './symposium-preference.component';

const routes: Routes = [{
  path: '',
  component: SymposiumPreferenceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymposiumPreferenceRoutingModule { }
