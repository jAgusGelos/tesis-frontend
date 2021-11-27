import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedesRoutingModule } from './sedes-routing.module';
import { SedesComponent } from './sedes.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    SedesComponent
  ],
  imports: [
    CommonModule,
    SedesRoutingModule,
    CoreModule
  ]
})
export class SedesModule { }
