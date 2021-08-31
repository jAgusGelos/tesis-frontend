import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PapersBySymposiumRoutingModule } from './papers-by-symposium-routing.module';
import { PapersBySymposiumComponent } from './papers-by-symposium.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [PapersBySymposiumComponent],
  imports: [
    CommonModule,
    PapersBySymposiumRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PapersBySymposiumModule { }
