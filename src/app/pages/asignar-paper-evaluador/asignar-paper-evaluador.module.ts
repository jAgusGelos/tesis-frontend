import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignarPaperEvaluadorRoutingModule } from './asignar-paper-evaluador-routing.module';
import { AsignarPaperEvaluadorComponent } from './asignar-paper-evaluador.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [AsignarPaperEvaluadorComponent],
  imports: [
    CommonModule,
    AsignarPaperEvaluadorRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AsignarPaperEvaluadorModule { }
