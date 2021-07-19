import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCompletedDataComponent } from './components/user-completed-data/user-completed-data.component';
import { UserLoggedComponent } from './components/user-logged/user-logged.component';
import { RoomComponent } from './components/room/room.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { CongressFormComponent } from './components/congress-form/congress-form.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CongressListComponent } from './components/congress-list/congress-list.component';
import { PaperListComponent } from './components/paper-list/paper-list.component';
import { PaperFormComponent } from './components/paper-form/paper-form.component';


@NgModule({
  declarations: [
    UserRegisterComponent,
    UserCompletedDataComponent,
    LoginFormComponent,
    UserLoggedComponent,
    RoomComponent,
    RoomFormComponent,
    CongressFormComponent,
    AgendaComponent,
    CongressListComponent,
    PaperListComponent,
    PaperFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  exports:  [
    UserRegisterComponent,
    UserCompletedDataComponent,
    LoginFormComponent,
    UserLoggedComponent,
    RoomComponent,
    RoomFormComponent,
    CongressFormComponent,
    CongressListComponent,
    PaperListComponent,
    PaperFormComponent

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class CoreModule { }
