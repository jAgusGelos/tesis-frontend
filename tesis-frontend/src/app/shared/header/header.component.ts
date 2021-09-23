import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = false;
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

    }
  }

  logout(): void {
    this.user = !this.user;
    this.authService.logout();
    window.location.reload();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });

  }
}
