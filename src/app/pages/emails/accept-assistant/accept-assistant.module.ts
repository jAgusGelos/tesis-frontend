import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptAssistantRoutingModule } from './accept-assistant-routing.module';
import { AcceptAssistantComponent } from './accept-assistant.component';


@NgModule({
  declarations: [AcceptAssistantComponent],
  imports: [
    CommonModule,
    AcceptAssistantRoutingModule
  ]
})
export class AcceptAssistantModule { }
