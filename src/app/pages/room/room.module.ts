import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [RoomComponent],
  imports: [
    CommonModule, 
    RoomRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoomModule { }
