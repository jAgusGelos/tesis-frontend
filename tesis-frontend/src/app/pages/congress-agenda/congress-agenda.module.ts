import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongressAgendaRoutingModule } from './congress-agenda-routing.module';
import { CongressAgendaComponent } from './congress-agenda.component';
import { CoreModule } from 'src/app/core/core.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CongressAgendaComponent],
  imports: [
    CommonModule,
    CongressAgendaRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HttpClientModule
  ]
})
export class CongressAgendaModule { }
