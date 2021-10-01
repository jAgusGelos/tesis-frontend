import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndRegisterRoutingModule } from './end-register-routing.module';
import { EndRegisterComponent } from './end-register.component';


@NgModule({
  declarations: [
    EndRegisterComponent
  ],
  imports: [
    CommonModule,
    EndRegisterRoutingModule
  ]
})
export class EndRegisterModule { }
