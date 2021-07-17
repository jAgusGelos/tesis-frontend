import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCompletedDataComponent } from './components/user-completed-data/user-completed-data.component';
import { UserLoggedComponent } from './components/user-logged/user-logged.component';
import { AssignSecChairsFormComponent } from './components/assign-sec-chairs-form/assign-sec-chairs-form.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    UserRegisterComponent,
    UserCompletedDataComponent,
    UsuarioFormComponent,
    LoginFormComponent,
    UserLoggedComponent,
    AssignSecChairsFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  exports:  [
    UserRegisterComponent,
    UserCompletedDataComponent,
    UsuarioFormComponent,
    LoginFormComponent,
    UserLoggedComponent,
    AssignSecChairsFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class CoreModule { }
