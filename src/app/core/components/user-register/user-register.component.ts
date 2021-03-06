import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../../models/IUser';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  titulo = 'Formulario de Registro';
  formUsuario: FormGroup;
  submitted = false;
  tipoDni = [{id: 1, nombre: 'DNI'}];
  provincias = [{id: 1, nombre: 'Cordoba'}];
  localidades = [{id: 1, nombre: 'Capital'}];
  sedes = [{id: 1, nombre: 'Utn Frc'}]
  /**
   * Usuario que se recibe o no cuando se inicia el componente.
   * Si no se recibe es un nuevo usuario
   * Si se recibe es un usuario existente que quiere cambiar sus datos
   */
  @Input() usuario: any;

  @Output() cancelRegister = new EventEmitter<any>();

  constructor( private formBuilder: FormBuilder,
               private datePipe: DatePipe,
               private userService: UserService,
               private router: Router,
               private toastr: ToastrService,
                 ) { }



    ngOnInit(): void {
      window.scrollTo(0, 0);
      this.getAllData();
      this.formUsuario = this.formBuilder.group({
        dni: ['',  [Validators.required]],
        tipoDni: ['',  [Validators.required]],
        apellido: ['',  [Validators.required]],
        nombre: ['',  [Validators.required]],
        fechaNacimiento: ['', [Validators.required]],
        provincia: ['',  [Validators.required]],
        localidad: ['',  [Validators.required]],
        calle: ['',  [Validators.required]],
        nroCalle: ['',  [Validators.required]],
        piso: ['',  []],
        sede: ['', [Validators.required]],
        dpto: ['',  []],
        celular: ['',  []],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        repPassword: ['', [Validators.required]]
      });
    }

    getAllData(): void {
      this.userService.getLocalidades().subscribe((res: any) => {
        this.localidades = res.data;
      });
      this.userService.getDni().subscribe((res: any) => {
        this.tipoDni = res;

      });
      this.userService.getProvincias().subscribe((res: any) => {
        this.provincias = res.data;
      });
      this.userService.getSedes().subscribe((res: any) => {
        this.sedes = res.data;
      });
    }

    convertDateFormat(date: string): any {
      const info = date.split('-').reverse().join('/');
      return info;
    }

    invertConvertDateFormat(date: string): any {
      date = date.split(' ')[0];
      const info = date.split('/').reverse().join('-');
      return info;
    }

    /**
     * Valida que el formulario de registro sea correcto.
     * En caso de que el usuario que recibe por par??metro no tenga ID agrega los nuevos datos al usuario logueado (POST)
     * En caso de que el usuario que recibe por par??metro tenga ID modifica los par??metros ya ingresados por el usuario (PUT)
     *
     * @returns Vuelve a la pagina anterior luego de modificar los datos
     */
    submit(): void {
      this.submitted = true;
      if (this.formUsuario.invalid) {
        this.toastr.warning('Por Favor complete todos los campos');
        return;
      }
      const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      if (this.formUsuario.controls.fechaNacimiento.value > today) {
        this.toastr.warning('Fecha Inv??lida, por favor ingrese una fecha correcta');
        return;
      }

      if (this.formUsuario.controls.password.value !==  this.formUsuario.controls.repPassword.value){
        this.toastr.warning('Las contrase??as deben ser iguales');
        return;
      }

      const password = this.formUsuario.controls.password.value;

      const encode = window.btoa(password);

      this.usuario = {
        dni: this.formUsuario.controls.dni.value,
        tipoDni: this.formUsuario.controls.tipoDni.value,
        apellido: this.formUsuario.controls.apellido.value,
        nombre: this.formUsuario.controls.nombre.value,
        celular: this.formUsuario.controls.celular.value ? this.formUsuario.controls.celular.value : 0 ,
        calle: this.formUsuario.controls.calle.value,
        numeroCalle: this.formUsuario.controls.nroCalle.value,
        piso: this.formUsuario.controls.piso.value || null,
        dpto: this.formUsuario.controls.dpto.value || null,
        fechaNacimiento:  this.formUsuario.controls.fechaNacimiento.value,
        localidad: this.formUsuario.controls.localidad.value,
        provincia: this.formUsuario.controls.provincia.value,
        sede: this.formUsuario.controls.sede.value,
        email : this.formUsuario.controls.email.value,
        password : encode
      };

      this.userService.register(this.usuario).subscribe( (res: any) => {
        if (res.error) {
          this.toastr.error('Ha ocurrido un error. Intente m??s tarde');
          return;
        }
        this.toastr.success('Datos Cargados Correctamente');
        this.router.navigate(['/endRegister']);
      });


    }

  /**
   * Dispara el evento Cancelar registro en el componente padre
   */
  cancel(): void {
    this.cancelRegister.emit();
  }


}
