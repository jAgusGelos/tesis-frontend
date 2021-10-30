import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionPublicaCongresoRoutingModule } from './informacion-publica-congreso-routing.module';
import { InformacionPublicaCongresoComponent } from './informacion-publica-congreso.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    InformacionPublicaCongresoComponent
  ],
  imports: [
    CommonModule,
    InformacionPublicaCongresoRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InformacionPublicaCongresoModule { }
