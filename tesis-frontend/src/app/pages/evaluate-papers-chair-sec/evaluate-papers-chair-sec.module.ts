import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluatePapersChairSecRoutingModule } from './evaluate-papers-chair-sec-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { EvaluatePapersChairSecComponent } from './evaluate-papers-chair-sec.component';


@NgModule({
  declarations: [EvaluatePapersChairSecComponent],
  imports: [
    CommonModule,
    EvaluatePapersChairSecRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvaluatePapersChairSecModule { }
