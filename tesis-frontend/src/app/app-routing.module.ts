import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/services/auth.guard';

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
    loadChildren: () => import('./pages/end-register/end-register-routing.module')
    .then(m => m.EndRegisterRoutingModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room/room.module')
    .then(m => m.RoomModule)
  },
  {
    path: 'congreso',
    loadChildren: () => import('./pages/congress/congress.module')
    .then(m => m.CongressModule),
    // descomentar al correr la bd
    // canActivate: [AuthGuard, SuperRolGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
