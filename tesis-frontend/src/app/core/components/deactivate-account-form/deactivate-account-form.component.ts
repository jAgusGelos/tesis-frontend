import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deactivate-account-form',
  templateUrl: './deactivate-account-form.component.html',
  styleUrls: ['./deactivate-account-form.component.css']
})
export class DeactivateAccountFormComponent implements OnInit {

  user: IUser;
  deactivated = false;
  constructor( private userService: UserService,
               private authService: AuthService,
               private router: Router) { }

  @Output() cancelDeactivate = new EventEmitter();

  ngOnInit(): void {
  }

  desactivar(){
    this.user = this.userService.getLoggedUser();
    this.authService.logout();
    this.userService.deactivate(this.user);
    this.deactivated = true;
  };

  cancel(): void {
    this.cancelDeactivate.emit();
  }

}
