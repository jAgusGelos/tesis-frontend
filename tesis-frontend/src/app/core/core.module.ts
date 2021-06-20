import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    UsuarioFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ UsuarioFormComponent ]
})
export class CoreModule { }
