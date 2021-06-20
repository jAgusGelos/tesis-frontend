import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';
import { Login } from '../../models/Login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  titulo = 'Inicio de Sesión';
  formLogin: FormGroup;
  submitted = false;

  @Input() login: Login = {
    email: '',
    password: ''};

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [this.login.email, [Validators.required]],
      password: [this.login.password, [Validators.required]]
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.formLogin.invalid) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    if (this.formLogin.controls.password.value !==  this.formLogin.controls.repPassword.value){
      alert('Las contraseñas deben ser iguales');
      return;
    }
    const login: Login = {
      email: this.formLogin.controls.email.value,
      password: this.formLogin.controls.password.value
    };
    this.loginService.postLogin(login).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/proxPage']);

    });
}
}
