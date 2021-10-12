import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComiteOrganizadorRoutingModule } from './comite-organizador-routing.module';
import { ComiteOrganizadorComponent } from './comite-organizador.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ComiteOrganizadorComponent],
  imports: [
    CommonModule,
    ComiteOrganizadorRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComiteOrganizadorModule { }
