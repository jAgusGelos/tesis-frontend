import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluatorRoutingModule } from './evaluator-routing.module';
import { EvaluatorComponent } from './evaluator.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    EvaluatorComponent
  ],
  imports: [
    CommonModule,
    EvaluatorRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvaluatorModule { }
