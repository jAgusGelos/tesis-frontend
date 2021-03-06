import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { CongressService } from '../../services/congress.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formLogin: FormGroup;
  submitted = false;
  congressList = [];
  @Output() registerEvent = new EventEmitter<any>();


  constructor( private formBuilder: FormBuilder,
               private loginService: AuthService,
               private congressService: CongressService,
               private router: Router,
               private toastr: ToastrService,
               ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formLogin = this.formBuilder.group({
      email: ['juanagustingelos@gmail.com', [Validators.required]],
      password: ['asdasd', [Validators.required]],
      idCongress: ['', [Validators.required]]
    });
    this.getCongress();
  }

  getCongress(): void {
    this.congressService.getCongressActivo().subscribe((res: any) => {
      this.congressList = res.data;
    });
  }

  register(): void {
    this.registerEvent.emit();
  }

  submit(): void {
    const password = this.formLogin.controls.password.value;

    const encode = window.btoa(password);

    if (this.formLogin.invalid ) {
      this.toastr.warning('Por favor complete todos los datos.');
      return;
    }
    const login = {
      email: this.formLogin.controls.email.value,
      password: encode,
      idCongreso: +this.formLogin.controls.idCongress.value
    };
    this.loginService
    .login(login)
    .subscribe((res: any) => {
      if (res.detail) {
        this.toastr.warning('Datos erroneos');
        return;
      }
      this.loginService.setSession(res);
      this.router.navigate(['']).then(() => {
        window.location.reload();
        console.log(res);
      });
    });
  }

}
