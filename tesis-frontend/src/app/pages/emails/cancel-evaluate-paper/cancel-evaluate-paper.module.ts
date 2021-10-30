import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelEvaluatePaperRoutingModule } from './cancel-evaluate-paper-routing.module';
import { CancelEvaluatePaperComponent } from './cancel-evaluate-paper.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [CancelEvaluatePaperComponent],
  imports: [
    CommonModule,
    CancelEvaluatePaperRoutingModule,
    CoreModule
  ]
})
export class CancelEvaluatePaperModule { }
