import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CongressComponent } from './congress.component';
import { CongressRoutingModule } from './congress-routing.module';



@NgModule({
  declarations: [CongressComponent],
  imports: [
    CommonModule,
    CongressRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HttpClientModule
  ]

})
export class CongressModule { }
