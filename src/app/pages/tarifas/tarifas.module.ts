import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifasRoutingModule } from './tarifas-routing.module';
import { TarifasComponent } from './tarifas.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [TarifasComponent],
  imports: [
    CommonModule,
    TarifasRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TarifasModule { }
