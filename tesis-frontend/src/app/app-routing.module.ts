import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { AutorRolGuard } from './core/services/guards/autor-rol.guard';
import { ChairRolGuard } from './core/services/guards/chair-rol.guard';
import { SuperRolGuard } from './core/services/guards/super-rol.guard';
import { HomeComponent } from './pages/home/home.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./pages/home/home.module')
    .then(m => m.HomeModule),
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module')
    .then(m => m.UsuarioModule),
    //  canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path: 'chairs',
    loadChildren: () => import('./pages/chairs/chairs.module')
    .then(m => m.ChairsModule),
    // Can activate CP CL
     // canActivate: [AuthGuard, ChairRolGuard]
  },
  {
    path: 'misCongresos',
    loadChildren: () => import('./pages/congress-agenda/congress-agenda.module')
    .then(m => m.CongressAgendaModule),
    // Can activate CP CL
    // canActivate: [AuthGuard, ChairRolGuard]
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room/room.module')
    .then(m => m.RoomModule),
    // Can activate CP CL
    // canActivate: [AuthGuard, ChairRolGuard]
  },
  {
    path: 'congreso',
    loadChildren: () => import('./pages/congress/congress.module')
    .then(m => m.CongressModule),
    // descomentar al correr la bd
     canActivate: [AuthGuard, SuperRolGuard]
  },
  {
    path: 'callForPapers',
    loadChildren: () => import('./pages/call-for-papers/call-for-papers.module')
    .then(m => m.CallForPapersModule),
    // descomentar al correr la bd
    // canActivate: [AuthGuard, AutorRolGuard]
  },
  {
    path: 'simposios',
    loadChildren: () => import('./pages/symposium/symposium.module')
    .then(m => m.SymposiumModule),
    // canActivate: [AuthGuard, SuperRolGuard]
  },
  {
    path: 'evaluacion',
    loadChildren: () => import('./pages/evaluation/evaluation.module')
    .then(m => m.EvaluationModule),
  },
  {
    path: 'evaluador',
    loadChildren: () => import('./pages/evaluator/evaluator.module')
    .then(m => m.EvaluatorModule),
  },
  {
    // No esta en uso
    path: 'evaluar',
    loadChildren: () => import('./pages/evaluate/evaluate.module')
    .then(m => m.EvaluateModule),
     // canActivate: [AuthGuard], [EvaluatorGuard]
  },
  {
    path: 'asignarPaperEvaluador',
    loadChildren: () => import('./pages/asignar-paper-evaluador/asignar-paper-evaluador.module')
    .then(m => m.AsignarPaperEvaluadorModule),
  },
  {
    // no esta en uso
    path: 'paperXSimposio',
    loadChildren: () => import('./pages/papers-by-symposium/papers-by-symposium.module')
    .then(m => m.PapersBySymposiumModule),
  },
  {
    path: 'verEvaluaciones',
    loadChildren: () => import('./pages/evaluate-article/evaluate-article.module')
    .then(m => m.EvaluateArticleModule),
  },
  {
    path: 'evaluatePapersChairSec',
    loadChildren: () => import('./pages/evaluate-papers-chair-sec/evaluate-papers-chair-sec.module')
    .then(m => m.EvaluatePapersChairSecModule),
  },
  {
    path: 'evaluators',
    loadChildren: () => import('./pages/evaluators/evaluators.module')
    .then(m => m.EvaluatorsModule),
  },
  {
    path: 'cupones',
    loadChildren: () => import('./pages/cupon/cupon.module')
    .then(m => m.CuponModule)
  },
  {path: 'tarifas',
  loadChildren: () => import('./pages/tarifas/tarifas.module')
  .then(m => m.TarifasModule)},
  {
    path: 'preferenciaSimposio',
    loadChildren: () => import('./pages/symposium-preference/symposium-preference.module')
    .then(m => m.SymposiumPreferenceModule),
  },
   {
    path: 'control',
    loadChildren: () => import('./pages/control-board/control-board.module')
    .then(m => m.ControlBoardModule),
  },
  {
    path: 'generarAgenda',
    loadChildren: () => import('./pages/schedule-calendar/schedule-calendar.module')
    .then(m => m.ScheduleCalendarModule),
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/graphs/graphs.module')
    .then(m => m.GraphsModule),
  },
  {
    path: 'verAgenda/:id',
    loadChildren: () => import('./pages/ver-schedule/ver-schedule.module')
    .then(m => m.VerScheduleModule),
  },



  // Notification routes
  {
    path: 'deactivateAccount',
    loadChildren: () => import('./pages/deactivate-account/deactivate-account.module')
    .then(m => m.DeactivateAccountModule),
  },
  {
    path: 'cancelacionChairSecundario/:token',
    loadChildren: () => import('./pages/cancel-sec-chair/cancel-sec-chair.module')
    .then(m => m.CancelSecChairModule),
  },
  {
    path: 'cancelacionEvaluador/:token',
    loadChildren: () => import('./pages/cancel-evaluator/cancel-evaluator.module')
    .then(m => m.CancelEvaluatorModule),
  },
  {
    path: 'cancelarAutoria/:token',
    loadChildren: () => import('./pages/cancel-author/cancel-author.module')
    .then(m => m.CancelAuthorModule),
  },
  {
    path: 'endRegister',
    loadChildren: () => import('./pages/end-register/end-register.module')
    .then(m => m.EndRegisterModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contact/contact.module')
    .then(m => m.ContactModule),
  },
  {
    path: 'inscribirme/:id',
    loadChildren: () => import('./pages/inscriptions/inscriptions.module')
    .then(m => m.InscriptionsModule)
  },
  {
    path: 'recuperarContraseña',
    loadChildren: () => import('./pages/recover-password/recover-password.module')
    .then(m => m.RecoverPasswordModule),
  },
  {
    path: 'cambiarContraseña',
    loadChildren: () => import('./pages/change-password/change-password.module')
    .then(m => m.ChangePasswordModule),
  },
  {
    path: 'cuentaConfirmada/:token',
    loadChildren: () => import('./pages/emails/confirmed-account/confirmed-account.module')
    .then(m => m.ConfirmedAccountModule),
  },
  {
    path: 'reestablecerContraseña/:token',
    loadChildren: () => import('./pages/emails/restore-password/restore-password.module')
    .then(m => m.RestorePasswordModule),
  },
  {
    path: 'aceptacionEvaluacionPaper/:token',
    loadChildren: () => import('./pages/emails/accept-evaluate-paper/accept-evaluate-paper.module')
    .then(m => m.AcceptEvaluatePaperModule),
  },
  {
    path: 'aceptacionRolEvaluador/:token',
    loadChildren: () => import('./pages/emails/accept-evaluator/accept-evaluator.module')
    .then(m => m.AcceptEvaluatorModule),
  },
  {
    path: 'cancelacionEvaluacionPaper/:token',
    loadChildren: () => import('./pages/emails/cancel-evaluate-paper/cancel-evaluate-paper.module')
    .then(m => m.CancelEvaluatePaperModule)
  },
/*   {
    path: 'comiteAcademico/:id',
    loadChildren: () => import('./pages/comite-academico/comite-academico.module')
    .then(m => m.ComiteAcademicoModule)
  },
  {
    path: 'comiteOrganizador/:id',
    loadChildren: () => import('./pages/comite-organizador/comite-organizador.module')
    .then(m => m.ComiteOrganizadorModule)
  }, */
  {
    path: 'informacionCongreso/:id',
    loadChildren: () => import('./pages/informacion-publica-congreso/informacion-publica-congreso.module')
    .then(m => m.InformacionPublicaCongresoModule)
  },
  {
    path: 'pagoInscripcionSuccess/:token',
    loadChildren: () => import('./pages/payment-windows/payment-success/payment-success.module')
    .then(m => m.PaymentSuccessModule)
  },
  {
    path: 'pagoInscripcionPending/:token',
    loadChildren: () => import('./pages/payment-windows/payment-pending/payment-pending.module')
    .then(m => m.PaymentPendingModule)
  },
  {
    path: 'pagoInscripcionFailure/:token',
    loadChildren: () => import('./pages/payment-windows/payment-failure/payment-failure.module')
    .then(m => m.PaymentFailureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
