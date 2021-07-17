import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module')
    .then(m => m.UsuarioModule),
     canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path: 'endRegister',
    loadChildren: () => import('./pages/end-register/end-register-routing.module')
    .then(m => m.EndRegisterRoutingModule)
  },
  {
    path: 'chairs',
    loadChildren: () => import('./pages/chairs/chairs-routing.module')
    .then(m => m.ChairsRoutingModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/congress-agenda/congress-agenda-routing.module')
    .then(m => m.CongressAgendaRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
