import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComiteAcademicoRoutingModule } from './comite-academico-routing.module';
import { ComiteAcademicoComponent } from './comite-academico.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ComiteAcademicoComponent],
  imports: [
    CommonModule,
    ComiteAcademicoRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HttpClientModule
  ]
})
export class ComiteAcademicoModule { }
