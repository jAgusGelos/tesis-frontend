import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsuarioModule { }
