import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelEvaluatorComponent } from './cancel-evaluator.component';
import { CancelEvaluatorRoutingModule } from './cancel-author-routing.module';



@NgModule({
  declarations: [CancelEvaluatorComponent],
  imports: [
    CommonModule,
    CancelEvaluatorRoutingModule
  ]
})
export class CancelEvaluatorModule { }
