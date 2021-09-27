import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluatorsRoutingModule } from './evaluators-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { EvaluatorsComponent } from './evaluators.component';


@NgModule({
  declarations: [
    EvaluatorsComponent
  ],
  imports: [
    CommonModule,
    EvaluatorsRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvaluatorsModule { }
