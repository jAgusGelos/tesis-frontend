import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateRoutingModule } from './evaluate-routing.module';
import { EvaluateComponent } from './evaluate.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    EvaluateComponent
  ],
  imports: [
    CommonModule,
    EvaluateRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EvaluateModule { }
