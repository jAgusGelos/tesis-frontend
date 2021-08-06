import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { ChairRolGuard } from './core/services/guards/chair-rol.guard';

const routes: Routes = [
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
    path: 'agenda',
    loadChildren: () => import('./pages/congress-agenda/congress-agenda.module')
    .then(m => m.CongressAgendaModule),
    // Can activate CP CL
    // canActivate: [AuthGuard, ChairRolGuard]
  },
  {
    path: 'room',
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
    path: 'deactivateAccount',
    loadChildren: () => import('./pages/deactivate-account/deactivate-account.module')
    .then(m => m.DeactivateAccountModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
