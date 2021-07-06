import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndRegisterComponent } from './end-register.component';

const routes: Routes = [
  {
    path: '',
    component: EndRegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndRegisterRoutingModule { }
