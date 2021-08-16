import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateArticleRoutingModule } from './evaluate-article-routing.module';
import { EvaluateArticleComponent } from './evaluate-article.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [EvaluateArticleComponent],
  imports: [
    CommonModule,
    EvaluateArticleRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvaluateArticleModule { }
