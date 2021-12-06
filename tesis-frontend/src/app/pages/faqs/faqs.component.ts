import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  user = false;
  rol: number[] = [];
  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private userService: UserService) { }

  ngOnInit(): void {
    const idToken = localStorage.getItem('id_token');
    if (idToken){
      this.user = true;
    }
    if (this.user) {
      this.userService.getLoggedUser().subscribe((res:any)=> {
        this.rol = this.authService.getUserRoles();
      },
      );
  }

}}

