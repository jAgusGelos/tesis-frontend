import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChairsComponent } from './chairs.component';
import { ChairsRoutingModule } from './chairs-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [ChairsComponent],
  imports: [
    CommonModule,
    ChairsRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChairsModule { }
