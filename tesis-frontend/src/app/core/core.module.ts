import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCompletedDataComponent } from './components/user-completed-data/user-completed-data.component';


@NgModule({
  declarations: [
    UserRegisterComponent,
    UserCompletedDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  exports:  [ UserRegisterComponent, UserCompletedDataComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class CoreModule { }
