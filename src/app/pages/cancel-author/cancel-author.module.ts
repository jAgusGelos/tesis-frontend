import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelAuthorRoutingModule } from './cancel-author-routing.module';
import { CancelAuthorComponent } from './cancel-author.component';


@NgModule({
  declarations: [CancelAuthorComponent],
  imports: [
    CommonModule,
    CancelAuthorRoutingModule
  ]
})
export class CancelAuthorModule { }
