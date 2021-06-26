import { Component} from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public loginService: LoginService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.loginService.postLogin(user).subscribe( data => {
      console.log(data);
    });
  }
}

