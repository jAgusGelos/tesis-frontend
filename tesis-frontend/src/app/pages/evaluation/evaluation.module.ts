import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationComponent } from './evaluation.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    EvaluationComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvaluationModule { }
