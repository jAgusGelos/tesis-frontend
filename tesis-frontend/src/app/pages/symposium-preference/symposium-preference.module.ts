import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymposiumPreferenceRoutingModule } from './symposium-preference-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SymposiumPreferenceComponent } from './symposium-preference.component';


@NgModule({
  declarations: [SymposiumPreferenceComponent],
  imports: [
    CommonModule,
    SymposiumPreferenceRoutingModule,
    CoreModule
  ]
})
export class SymposiumPreferenceModule { }
