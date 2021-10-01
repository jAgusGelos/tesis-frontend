import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-recover-password-form',
  templateUrl: './recover-password-form.component.html',
  styleUrls: ['./recover-password-form.component.css']
})
export class RecoverPasswordFormComponent implements OnInit {
  formRecoverPass : FormGroup;
  submitted = false;
  @Output() cancelRecover = new EventEmitter<any>();
  
  constructor(private formBuilder:FormBuilder,
              private userService:AuthService) { }

  ngOnInit(): void {
    this.formRecoverPass = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.formRecoverPass.invalid) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    this.userService.recoverPassword(this.formRecoverPass.controls.email.value).subscribe(
      (res: any) => alert('Se envió el mail...'),
      (err: any) => {if (err.status == 400) alert('No existe un usuario con el mail ingresado.' + err.error.error)
                    else alert('Error del Servidor')}
    );
  }

  cancel(): void {
      this.cancelRecover.emit();
    }

  

}
