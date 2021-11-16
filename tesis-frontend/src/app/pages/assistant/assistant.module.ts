import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistantRoutingModule } from './assistant-routing.module';
import { AssistantComponent } from '../assistant/assistant.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [AssistantComponent],
  imports: [
    CommonModule,
    AssistantRoutingModule,
    CoreModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AssistantModule { }
