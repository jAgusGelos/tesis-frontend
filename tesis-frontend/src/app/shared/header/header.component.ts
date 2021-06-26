import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = false;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    const idToken = localStorage.getItem('id_token');
    if (idToken){
      this.user = true;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
