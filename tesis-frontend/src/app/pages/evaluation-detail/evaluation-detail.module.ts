import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationDetailComponent } from './evaluation-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { EvaluationDetailRoutingModule } from './evaluation-detail-routing.module';



@NgModule({
  declarations: [EvaluationDetailComponent],
  imports: [
    CommonModule,
    EvaluationDetailRoutingModule,
    CoreModule    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvaluationDetailModule { }
