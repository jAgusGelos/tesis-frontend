import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserComplete } from '../../models/IUserComplete';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-completed-data',
  templateUrl: './user-completed-data.component.html',
  styleUrls: ['./user-completed-data.component.css']
})
export class UserCompletedDataComponent implements OnInit {

  @Input() titulo = 'Formulario de Registro';
  formUsuario: FormGroup;
  submitted = false;
  tipoDni = ['DNI', 'CU', 'CI'];
  nacionalidades = ['ARGENTINA', 'PERU', 'COLOMBIA'];
  provincias = ['Cordoba', 'Buenos Aires'];
  localidades = ['Capital', 'Rio IV'];
  /**
   * Usuario que se recibe o no cuando se inicia el componente.
   * Si no se recibe es un nuevo usuario
   * Si se recibe es un usuario existente que quiere cambiar sus datos
   */
  @Input() usuario: IUserComplete = {
    id: '',
    dni: null,
    tipoDni: '',
    apellido: '',
    nombre: '',
    fechaNacimiento: new Date(),
    nacionalidad: '',
    provincia: '',
    localidad: '',
    calle: '',
    nroCalle: null,
    piso: '',
    dpto: '',
    celular: null,
    email: '' };

    constructor( private formBuilder: FormBuilder,
                 private datePipe: DatePipe,
                 private userService: UserService ) { }

    ngOnInit(): void {
      this.formUsuario = this.formBuilder.group({
        dni: [this.usuario.dni, [Validators.required]],
        tipoDni: [this.usuario.tipoDni, [Validators.required]],
        apellido: [this.usuario.apellido, [Validators.required]],
        nombre: [this.usuario.nombre, [Validators.required]],
        fechaNacimiento: [this.usuario.fechaNacimiento, [Validators.required]],
        nacionalidad: [this.usuario.nacionalidad, [Validators.required]],
        provincia: [this.usuario.provincia, [Validators.required]],
        localidad: [this.usuario.localidad, [Validators.required]],
        calle: [this.usuario.calle, [Validators.required]],
        nroCalle: [this.usuario.nroCalle, [Validators.required]],
        piso: [this.usuario.piso, []],
        dpto: [this.usuario.dpto, []],
        celular: [this.usuario.celular, []]
      });
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
        alert('Por Favor complete todos los campos');
        return;
      }
      const today = this.datePipe.transform(new Date(), 'yyy-MM-dd');
      if (this.formUsuario.controls.fechaNacimiento.value > today) {
        alert('Fecha Inválida, por favor ingrese una fecha correcta');
        return;
      }
      this.usuario.dni  = this.formUsuario.controls.dni.value;
      this.usuario.tipoDni  = this.formUsuario.controls.tipoDni.value;
      this.usuario.apellido  = this.formUsuario.controls.apellido.value;
      this.usuario.nombre  = this.formUsuario.controls.nombre.value;
      this.usuario.celular  = this.formUsuario.controls.celular.value;
      this.usuario.calle  = this.formUsuario.controls.calle.value;
      this.usuario.nroCalle  = this.formUsuario.controls.nroCalle.value;
      this.usuario.piso  = this.formUsuario.controls.piso.value;
      this.usuario.dpto  = this.formUsuario.controls.dpto.value;
      this.usuario.email  = this.formUsuario.controls.email.value;
      this.usuario.fechaNacimiento  = this.formUsuario.controls.fechaNacimiento.value;
      this.usuario.nacionalidad = this.formUsuario.controls.nacionalidad.value;
      this.usuario.localidad = this.formUsuario.controls.localidad.value;
      this.usuario.provincia = this.formUsuario.controls.provincia.value;

      this.userService.postUserComplete(this.usuario).subscribe( (res: any) => {
      alert('Usuario Creado Correctamente');
      // Ir a la siguiente página.
      });


    }

    /**
     * Regresa a la pagina anterior. Cancela la modificación de los datos de usuario.
     */
    cancel(): void {
      // Volver a la página anterior
    }
}
