import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports:  [ UserRegisterComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule { }
