import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelSecChairRoutingModule } from './cancel-author-routing.module';
import { CancelSecChairComponent } from '../cancel-sec-chair/cancel-sec-chair.component';

@NgModule({
  declarations: [CancelSecChairComponent],
  imports: [
    CommonModule,
    CancelSecChairRoutingModule
  ]
})
export class CancelSecChairModule { }
