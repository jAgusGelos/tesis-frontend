import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/IUser';
import { IUserComplete } from 'src/app/core/models/IUserComplete';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = false;
  userLogged : IUserComplete ={ 
               id: '',
               dni: 0,
               tipoDni: '',
               apellido: '',
               nombre: '',
               fechaNacimiento: '',
               nacionalidad: '',
               provincia: '',
               localidad: '',
               calle: '',
               nroCalle: 1,
               piso: '',
               dpto: '',
               celular: 0,
               email: '',
};

  rol: number[] = [];
  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    const idToken = localStorage.getItem('id_token');
    if (idToken){
      this.user = true;
    }
    if (this.user) {
      this.rol = [1];
      // this.rol = this.authService.getUserRoles();
      this.userService.getLoggedUser().subscribe((res:any)=> {
        this.userLogged = res;})
    }
  }

  logout(): void {
    this.user = !this.user;
    this.authService.logout();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });

  }
}
