import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formLogin: FormGroup;
  submitted = false;
  @Output() registerEvent = new EventEmitter<any>();


  constructor( private formBuilder: FormBuilder,
               private loginService: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['juanagustingelos1@gmail.com', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  register(): void {
    this.registerEvent.emit();
  }

  submit(): void {
    this.submitted = true;
    if (this.formLogin.invalid) {
      alert('Por favor complete todos los datos.');
      return;
    }
    this.loginService
    .login(this.formLogin.controls.email.value, this.formLogin.controls.password.value)
    .subscribe((res: any) => {
      console.log(res);
      this.loginService.setSession(res);
      this.router.navigate(['']);
    });
  }

}
