import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymposiumRoutingModule } from './symposium-routing.module';
import { SymposiumComponent } from './symposium.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    SymposiumComponent
  ],
  imports: [
    CommonModule,
    SymposiumRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SymposiumModule { }
