import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlBoardRoutingModule } from './control-board-routing.module';
import { ControlBoardComponent } from './control-board.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ControlBoardComponent],
  imports: [
    CommonModule,
    ControlBoardRoutingModule,
    CoreModule
  ]
})
export class ControlBoardModule { }
