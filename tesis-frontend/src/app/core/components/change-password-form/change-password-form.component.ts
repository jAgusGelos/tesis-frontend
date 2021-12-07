import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
;

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  @Output() cancelChange = new EventEmitter<any>();


  constructor(private formBuilder: FormBuilder,
              private userService: AuthService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form = this.formBuilder.group({
      actual: ['', [Validators.required]],
      new: ['', [Validators.required]],
      repPass: ['', [Validators.required]]
    });
  }

  submit(): void{
    this.submitted = true;
    if (this.form.invalid){
      this.toastr.warning('Por favor complete todos los campos.');
      return;
    } else if (this.form.controls.new.value === this.form.controls.actual.value){
      this.toastr.warning('Las contraseña nueva no puede ser igual a la antigua.');
      return;
    } else if (this.form.controls.new.value !== this.form.controls.repPass.value){
      this.toastr.warning('Las contraseña repetida no coincide con la nueva.');
      return;
    }
    const change = {pass_antigua: window.btoa(this.form.controls.actual.value),
                    pass_nueva: window.btoa(this.form.controls.new.value)};
    const passwords = {passwords: change};
    this.userService.changePassword(passwords).subscribe(
      (res: any) => this.toastr.success('Contraseña actualizada'),
      (err: any) => {
        if (err.status === 400) {
          this.toastr.warning('La contraseña antigua no es correcta.');
        } else {
          this.toastr.error('Error del servidor.');
        }
      },
      () => {this.submitted = false; }
  );
  }

  cancel(): void{
    this.cancelChange.emit();
  }
}
