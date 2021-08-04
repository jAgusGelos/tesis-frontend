import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { ChairRolGuard } from './core/services/guards/chair-rol.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module')
    .then(m => m.UsuarioModule),
     // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path: 'endRegister',
    loadChildren: () => import('./pages/end-register/end-register.module')
    .then(m => m.EndRegisterModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'chairs',
    loadChildren: () => import('./pages/chairs/chairs.module')
    .then(m => m.ChairsModule)
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
    path: 'room/:id',
    loadChildren: () => import('./pages/room/room.module')
    .then(m => m.RoomModule)
    // Can activate CP CL
    // canActivate: [AuthGuard, ChairRolGuard]
  },
  {
    path: 'congreso',
    loadChildren: () => import('./pages/congress/congress.module')
    .then(m => m.CongressModule),
    // descomentar al correr la bd
    // canActivate: [AuthGuard, SuperRolGuard]
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
    path: 'cancelar',
    loadChildren: () => import('./pages/cancel-author/cancel-author.module')
    .then(m => m.CancelAuthorModule),
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
