import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuponRoutingModule } from './cupon-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { CuponComponent } from './cupon.component';


@NgModule({
  declarations: [CuponComponent],
  imports: [
    CommonModule,
    CuponRoutingModule,
    CoreModule
  ]
})
export class CuponModule { }
