import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongressAgendaRoutingModule } from './congress-agenda-routing.module';
import { CongressAgendaComponent } from './congress-agenda.component';
import { CoreModule } from 'src/app/core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [CongressAgendaComponent],
  imports: [
    CommonModule,
    CongressAgendaRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CongressAgendaComponent]
})
export class CongressAgendaModule { }
