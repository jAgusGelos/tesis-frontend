import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './core/services/auth.interceptor';
import { CancelAuthorComponent } from './pages/cancel-author/cancel-author.component';
import { AsignarPaperEvaluadorComponent } from './pages/asignar-paper-evaluador/asignar-paper-evaluador.component';
import { PapersBySymposiumComponent } from './pages/papers-by-symposium/papers-by-symposium.component';
import { EvaluatePapersChairSecComponent } from './pages/evaluate-papers-chair-sec/evaluate-papers-chair-sec.component';





@NgModule({
  declarations: [AppComponent, AsignarPaperEvaluadorComponent, PapersBySymposiumComponent, EvaluatePapersChairSecComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
