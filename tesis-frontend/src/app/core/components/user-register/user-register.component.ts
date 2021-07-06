import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  formRegister: FormGroup;
  submitted = false;
  @Output() cancelRegister = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
              private userService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repPassword: ['', [Validators.required]]
    });
  }


  /**
   * Valida que el formulario de registro sea correcto
   * Valida que las contraseñas sean iguales
   * Llama al servicio para realizar un post de un nuevo usuario
   *
   * @param 'Email, contraseña y contraseña repetida'
   * @returns 'Avanza a la siguiente página de registro'
   */

  submit(): void {
    this.submitted = true;
    if (this.formRegister.invalid) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    if (this.formRegister.controls.password.value !==  this.formRegister.controls.repPassword.value){
      alert('Las contraseñas deben ser iguales');
      return;
    }
    const user: IUser = {
      email: this.formRegister.controls.email.value,
      password: this.formRegister.controls.password.value
    };
    this.userService.register(user).subscribe((res: any) => {
      if (!res){
        alert('Ya existe un usuario con ese mail.');
      }
      else {
        this.router.navigate(['/endRegister']);
      }

    });
    // this.userService.register(user.email, user.password).then((res: any) => {
    //   console.log(res);
    //   this.router.navigate(['/usuario']);
    // });
  }

  /**
   * Dispara el evento Cancelar registro en el componente padre
   */
  cancel(): void {
    this.cancelRegister.emit();
  }


}
