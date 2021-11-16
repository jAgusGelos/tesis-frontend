import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCompletedDataComponent } from './components/user-completed-data/user-completed-data.component';
import { UserLoggedComponent } from './components/user-logged/user-logged.component';
import { AssignSecChairsFormComponent } from './components/assign-sec-chairs-form/assign-sec-chairs-form.component';
import { RoomComponent } from './components/room/room.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { CongressFormComponent } from './components/congress-form/congress-form.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CongressListComponent } from './components/congress-list/congress-list.component';
import { PaperListComponent } from './components/paper-list/paper-list.component';
import { PaperFormComponent } from './components/paper-form/paper-form.component';
import { SymposiumFormComponent } from './components/symposium-form/symposium-form.component';
import { SymposiumListComponent } from './components/symposium-list/symposium-list.component';
import { SymposiumSelectComponent } from './components/symposium-select/symposium-select.component';
import { CongressActiveComponent } from './components/congress-active/congress-active.component';
import { EvaluationListComponent } from './components/evaluation-list/evaluation-list.component';
import { EvaluationFormComponent } from './components/evaluation-form/evaluation-form.component';
import { EvaluateFormComponent } from './components/evaluate-form/evaluate-form.component';
import { EvaluateListComponent } from './components/evaluate-list/evaluate-list.component';
import { PapersBySymposiumListComponent } from './components/papers-by-symposium-list/papers-by-symposium-list.component';
import { DeactivateAccountFormComponent } from './components/deactivate-account-form/deactivate-account-form.component';
import { EvaluatePaperListComponent } from './components/evaluate-paper-list/evaluate-paper-list.component';
import { EvaluatePaperFormComponent } from './components/evaluate-paper-form/evaluate-paper-form.component';
import { EvaluatorListComponent } from './components/evaluator-list/evaluator-list.component';
import { CongressCardComponent } from './components/congress-card/congress-card.component';
import { CuponListComponent } from './components/cupon-list/cupon-list.component';
import { CuponFormComponent } from './components/cupon-form/cupon-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { RecoverPasswordFormComponent } from './components/recover-password-form/recover-password-form.component';
import { TarifaListComponent } from './components/tarifa-list/tarifa-list.component';
import { TarifaFormComponent } from './components/tarifa-form/tarifa-form.component';
import { CustomToastComponent } from './components/custom-toast/custom-toast.component';
import { AsignarPaperEvaluadorListComponent } from './components/asignar-paper-evaluador-list/asignar-paper-evaluador-list.component';
import { SearchComponent } from './components/search/search.component';
import { ComisionPermanenteOrganizacionComponent } from './components/comision-permanente-organizacion/comision-permanente-organizacion.component';
import { ComisionEjecutivaOrganizacionComponent } from './components/comision-ejecutiva-organizacion/comision-ejecutiva-organizacion.component';
import { ComiteOrganizadorLocalComponent } from './components/comite-organizador-local/comite-organizador-local.component';
import { ComiteAcademicoListComponent } from './components/comite-academico-list/comite-academico-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaperReadyComponent } from './components/paper-ready/paper-ready.component';
import { RevisionAutorComponent } from './components/revision-autor/revision-autor.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { RouterModule } from '@angular/router';
import { AssistantListComponent } from './components/assistant-list/assistant-list.component';

@NgModule({
  declarations: [
    UserRegisterComponent,
    UserCompletedDataComponent,
    LoginFormComponent,
    UserLoggedComponent,
    AssignSecChairsFormComponent,
    AgendaComponent,
    RoomComponent,
    RoomFormComponent,
    CongressFormComponent,
    AgendaComponent,
    CongressListComponent,
    PaperListComponent,
    PaperFormComponent,
    CongressListComponent,
    SymposiumFormComponent,
    SymposiumListComponent,
    SymposiumSelectComponent,
    CongressActiveComponent,
    EvaluationListComponent,
    EvaluationFormComponent,
    EvaluateFormComponent,
    EvaluateListComponent,
    PapersBySymposiumListComponent,
    DeactivateAccountFormComponent,
    EvaluatePaperListComponent,
    EvaluatePaperFormComponent,
    EvaluatorListComponent,
    CongressCardComponent,
    CuponListComponent,
    CuponFormComponent,
    ChangePasswordFormComponent,
    RecoverPasswordFormComponent,
    TarifaListComponent,
    TarifaFormComponent,
    AsignarPaperEvaluadorListComponent,
    SearchComponent,
    ComisionPermanenteOrganizacionComponent,
    ComisionEjecutivaOrganizacionComponent,
    ComiteOrganizadorLocalComponent,
    ComiteAcademicoListComponent,
    PaperReadyComponent,
    RevisionAutorComponent,
    CustomToastComponent,
    SearchComponent,
    AsignarPaperEvaluadorListComponent,
    AssistantListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  exports:  [
    UserRegisterComponent,
    UserCompletedDataComponent,
    LoginFormComponent,
    UserLoggedComponent,
    RoomComponent,
    RoomFormComponent,
    CongressFormComponent,
    CongressListComponent,
    PaperListComponent,
    PaperFormComponent,
    AssignSecChairsFormComponent,
    AgendaComponent,
    SymposiumFormComponent,
    SymposiumListComponent,
    SymposiumSelectComponent,
    CongressActiveComponent,
    EvaluationListComponent,
    EvaluationFormComponent,
    EvaluateFormComponent,
    EvaluateListComponent,
    PapersBySymposiumListComponent,
    DeactivateAccountFormComponent,
    EvaluatePaperListComponent,
    EvaluatePaperFormComponent,
    EvaluatorListComponent,
    CongressCardComponent,
    CuponListComponent,
    CuponFormComponent,
    ChangePasswordFormComponent,
    RecoverPasswordFormComponent,
    TarifaListComponent,
    TarifaFormComponent,
    CustomToastComponent,
    AsignarPaperEvaluadorListComponent,
    SearchComponent,
    ComisionPermanenteOrganizacionComponent,
    ComisionEjecutivaOrganizacionComponent,
    ComiteOrganizadorLocalComponent,
    ComiteAcademicoListComponent,
    PaperReadyComponent,
    RevisionAutorComponent,
    AssistantListComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class CoreModule { }
