import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OkInscriptionRoutingModule } from './ok-inscription-routing.module';
import { OkInscriptionComponent } from './ok-inscription.component';


@NgModule({
  declarations: [
    OkInscriptionComponent
  ],
  imports: [
    CommonModule,
    OkInscriptionRoutingModule
  ]
})
export class OkInscriptionModule { }
