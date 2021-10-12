import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserComplete } from '../../models/IUserComplete';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-completed-data',
  templateUrl: './user-completed-data.component.html',
  styleUrls: ['./user-completed-data.component.css']
})
export class UserCompletedDataComponent implements OnInit {

  titulo = 'Formulario de Registro';
  formUsuario: FormGroup;
  submitted = false;
  tipoDni = [{id: 1, nombre: 'DNI'}];
  provincias = [{id: 1, nombre: 'Cordoba'}];
  localidades = [{id: 1, nombre: 'Capital'}];
  /**
   * Usuario que se recibe o no cuando se inicia el componente.
   * Si no se recibe es un nuevo usuario
   * Si se recibe es un usuario existente que quiere cambiar sus datos
   */
  @Input() usuario: any;

    constructor( private formBuilder: FormBuilder,
                 private datePipe: DatePipe,
                 private userService: UserService,
                 private router: Router,
                 private toastr: ToastrService,
                 ) { }

    ngOnInit(): void {
      window.scrollTo(0, 0);
      console.log(this.usuario);
      this.getAllData();

      this.formUsuario = this.formBuilder.group({
        dni: [this.usuario.dni, [Validators.required]],
        tipoDni: [this.usuario.tipoDni, [Validators.required]],
        apellido: [this.usuario.apellido, [Validators.required]],
        nombre: [this.usuario.nombre, [Validators.required]],
        fechaNacimiento: [this.invertConvertDateFormat(this.usuario.fechaNacimiento.split(' ')[0]), [Validators.required]],
        provincia: [this.usuario.provincia, [Validators.required]],
        localidad: [this.usuario.localidad, [Validators.required]],
        calle: [this.usuario.calle, [Validators.required]],
        nroCalle: [this.usuario.numeroCalle, [Validators.required]],
        piso: [this.usuario.piso, []],
        dpto: [this.usuario.dpto, []],
        celular: [this.usuario.celular, []]
      });
    }

    getAllData(): void {
      this.userService.getLocalidades().subscribe((res: any) => {
        this.localidades = res;
      });
      this.userService.getDni().subscribe((res: any) => {
        this.tipoDni = res;
      });
      this.userService.getProvincias().subscribe((res: any) => {
        this.provincias = res;
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
     * En caso de que el usuario que recibe por parámetro no tenga ID agrega los nuevos datos al usuario logueado (POST)
     * En caso de que el usuario que recibe por parámetro tenga ID modifica los parámetros ya ingresados por el usuario (PUT)
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
        this.toastr.warning('Fecha Inválida, por favor ingrese una fecha correcta');
        return;
      }

      this.usuario = {
        id: this.usuario.id,
        dni: this.formUsuario.controls.dni.value,
        tipoDni: this.formUsuario.controls.tipoDni.value,
        apellido: this.formUsuario.controls.apellido.value,
        nombre: this.formUsuario.controls.nombre.value,
        celular: this.formUsuario.controls.celular.value ? this.formUsuario.controls.celular.value : 0 ,
        calle: this.formUsuario.controls.calle.value,
        numeroCalle: this.formUsuario.controls.nroCalle.value,
        piso: this.formUsuario.controls.piso.value,
        dpto: this.formUsuario.controls.dpto.value,
        fechaNacimiento:  this.convertDateFormat(this.formUsuario.controls.fechaNacimiento.value) + ' 00:00:00',
        localidad: this.formUsuario.controls.localidad.value,
        provincia: this.formUsuario.controls.provincia.value,
        email : this.usuario.email
      };

      this.userService.postUserComplete(this.usuario).subscribe( (res: any) => {
        if (res.error) {
          this.toastr.error('Ha ocurrido un error. Intente más tarde');
          return;
        }
        this.toastr.success('Datos Cargados Correctamente');
        this.router.navigate(['/']);
      });


    }

    /**
     * Regresa a la pagina anterior. Cancela la modificación de los datos de usuario.
     */
    cancel(): void {
      this.router.navigate(['/']);
      // Volver a la página anterior
    }
}
