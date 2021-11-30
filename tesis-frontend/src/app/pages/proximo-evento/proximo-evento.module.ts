import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProximoEventoRoutingModule } from './proximo-evento-routing.module';
import { ProximoEventoComponent } from './proximo-evento.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ProximoEventoComponent],
  imports: [
    CommonModule,
    ProximoEventoRoutingModule,
    CoreModule
  ]
})
export class ProximoEventoModule { }
