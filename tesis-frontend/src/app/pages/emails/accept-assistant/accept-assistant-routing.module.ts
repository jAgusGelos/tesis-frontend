import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptEvaluatorComponent } from '../accept-evaluator/accept-evaluator.component';
import { AcceptAssistantComponent } from './accept-assistant.component';

const routes: Routes = [{
  path: '',
  component: AcceptAssistantComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceptAssistantRoutingModule { }
