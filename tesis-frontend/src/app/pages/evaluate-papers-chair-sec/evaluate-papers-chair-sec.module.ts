import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluatePapersChairSecRoutingModule } from './evaluate-papers-chair-sec-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EvaluatePapersChairSecRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvaluatePapersChairSecModule { }
