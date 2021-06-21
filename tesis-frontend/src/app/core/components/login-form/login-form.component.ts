import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() titulo = 'INICIO DE SESIÓN';
  formLogin: FormGroup;
  submitted = true;
  @Input() login: Login = {
    email: '',
    password: ''};

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [this.login.email, [Validators.required]],
      password: [this.login.password, [Validators.required]]
    });
  }
}
