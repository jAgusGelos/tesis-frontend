import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module')
    .then(m => m.UsuarioModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
    .then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
