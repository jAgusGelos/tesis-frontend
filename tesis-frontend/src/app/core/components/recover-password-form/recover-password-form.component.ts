import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-recover-password-form',
  templateUrl: './recover-password-form.component.html',
  styleUrls: ['./recover-password-form.component.css']
})
export class RecoverPasswordFormComponent implements OnInit {

  formRecoverPass: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: AuthService,
              private toastr: ToastrService,
              ) { }

  ngOnInit(): void {
    this.formRecoverPass = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.formRecoverPass.invalid) {
      this.toastr.warning('Por favor complete todos los campos.');
      return;
    }
    this.userService.recoverPassword(this.formRecoverPass.controls.email.value).subscribe(
      (res: any) => this.toastr.success('Se envió el mail para recuperar la'),
      (err: any) => {
        if (err.status == 400) {
        this.toastr.warning('No existe un usuario con el mail ingresado.')
      } else {
        this.toastr.error('Error del Servidor')}
      }
    );
  }
}
