import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    CoreModule
  ]
})
export class FaqsModule { }
