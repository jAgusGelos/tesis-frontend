import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptEvaluatorRoutingModule } from './accept-evaluator-routing.module';
import { AcceptEvaluatorComponent } from './accept-evaluator.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [AcceptEvaluatorComponent],
  imports: [
    CommonModule,
    AcceptEvaluatorRoutingModule,
    CoreModule
  ]
})
export class AcceptEvaluatorModule { }
