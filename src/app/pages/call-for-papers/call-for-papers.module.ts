import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallForPapersRoutingModule } from './call-for-papers-routing.module';
import { CallForPapersComponent } from './call-for-papers.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    CallForPapersComponent,
  ],
  imports: [
    CommonModule,
    CallForPapersRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CallForPapersComponent]
})
export class CallForPapersModule { }
