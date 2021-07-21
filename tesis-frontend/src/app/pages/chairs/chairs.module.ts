import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { ChairsComponent } from './chairs.component';
import { ChairsRoutingModule } from './chairs-routing.module';

@NgModule({
  declarations: [ChairsComponent],
  imports: [
    CommonModule,
    ChairsRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HttpClientModule
  ]

})
export class ChairsModule { }

