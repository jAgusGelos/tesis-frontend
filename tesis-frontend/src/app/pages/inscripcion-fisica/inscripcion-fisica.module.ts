import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionFisicaRoutingModule } from './inscripcion-fisica-routing.module';
import { InscripcionFisicaComponent } from './inscripcion-fisica.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InscripcionFisicaComponent],
  imports: [
    CommonModule,
    InscripcionFisicaRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class InscripcionFisicaModule { }
