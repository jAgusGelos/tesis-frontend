import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HttpClientModule
  ]
})
export class UsuarioModule { }
