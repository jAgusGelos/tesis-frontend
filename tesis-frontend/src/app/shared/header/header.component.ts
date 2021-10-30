import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { CustomToastComponent, IToastButton } from 'src/app/core/components/custom-toast/custom-toast.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = false;
  superuser = false;
  rol: number[] = [];
  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    const idToken = localStorage.getItem('id_token');
    if (idToken){
      this.user = true;
    }
    if (this.user) {
      this.superuser = this.authService.getSuperUser();
      this.rol = this.authService.getUserRoles();
    }
  }

  toast(): void {
    // Metodo 1
    this.toastr.success('Adios');

    // Método dos
    this.toastr
      .show( 'Esta seguro que desea borrar', 'Confirmar borrado?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        console.log('Camino feliz');
      });
  }


  logout(): void {
    this.user = !this.user;
    this.authService.logout().subscribe((res: any) => {
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      this.toastr.success('Adios, lo esperamos de vuelta');
      this.router.navigateByUrl('/');
    });
  }
}
