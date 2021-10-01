import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import { AuthService } from '../../services/auth.service';
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
              private userService: AuthService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.form = this.formBuilder.group({
      actual: ['',[Validators.required]],
      new: ['',[Validators.required]],
      repPass: ['',[Validators.required]]

      
    })
  }

  submit():void{
    this.submitted = true;
    if(this.form.invalid){
      alert('Por favor complete todos los campos.');
      return;
    }
    if (this.form.controls.new.value !== this.form.controls.repPass.value){
      alert('Las contraseñas deben ser iguales.');
      return;
    }
    const change = {pass_antigua: window.btoa(this.form.controls.actual.value),
                    pass_nueva: window.btoa(this.form.controls.new.value)}; 
    const passwords = {passwords:change};
    this.userService.changePassword(passwords).subscribe(
      (res: any) => alert('Se cambió la contraseña...'),
      (err: any) => {if (err.status == 400) alert('La contraseña antigua no es correcta. ' + err.error.error)
                      else alert('Error del Servidor')}
  );
  }

  cancel(): void{
    this.cancelChange.emit();
  }

}
