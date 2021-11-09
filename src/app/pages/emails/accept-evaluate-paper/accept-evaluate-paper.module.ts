import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptEvaluatePaperRoutingModule } from './accept-evaluate-paper-routing.module';
import { AcceptEvaluatePaperComponent } from './accept-evaluate-paper.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [AcceptEvaluatePaperComponent],
  imports: [
    CommonModule,
    AcceptEvaluatePaperRoutingModule,
    CoreModule
  ]
})
export class AcceptEvaluatePaperModule { }
