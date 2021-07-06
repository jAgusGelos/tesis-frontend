import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCompletedDataComponent } from './components/user-completed-data/user-completed-data.component';
import { UserLoggedComponent } from './components/user-logged/user-logged.component';



@NgModule({
  declarations: [
    UserRegisterComponent,
    UserCompletedDataComponent,
    UsuarioFormComponent,
    LoginFormComponent,
    UserLoggedComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  exports:  [
    UserRegisterComponent,
    UserCompletedDataComponent,
    UsuarioFormComponent,
    LoginFormComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class CoreModule { }
