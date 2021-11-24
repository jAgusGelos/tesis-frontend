import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InscriptionsService } from 'src/app/core/services/inscriptions.service';
import { TarifasService } from 'src/app/core/services/tarifas.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-inscripcion-fisica',
  templateUrl: './inscripcion-fisica.component.html',
  styleUrls: ['./inscripcion-fisica.component.css']
})
export class InscripcionFisicaComponent implements OnInit {

  formCorreo: FormGroup;
  formInscripcion: FormGroup;
  submitted = false;
  userChecked = false;
  tipoDniList = [];
  tarifaList = [];
  datos = {
    email: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    dni: '',
    tipoDni: ''
  };

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private tarifaService: TarifasService,
              private inscriptionService: InscriptionsService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCorreo = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]});

    this.formInscripcion = this.formBuilder.group({
      email: [this.datos.email, [Validators.required, Validators.email]],
      nombre: [this.datos.nombre, [Validators.required]],
      apellido: [this.datos.apellido, [Validators.required]],
      fechaNacimiento: [this.datos.fechaNacimiento, [Validators.required]],
      dni: [this.datos.dni, [Validators.required, Validators.min(0)]],
      tipoDni: [this.datos.tipoDni, [Validators.required]]
    });
    this.getTiposDni();
    this.getTarifas();
    this.formInscripcion.disable();
  }

  checkUser(): void {
    this.submitted = true;
    if (this.formCorreo.invalid) {
      this.toast.error('Ingrese una dirección de correo válida.');
      return;
    }
    const email = this.formCorreo.controls.correo.value;
    this.userService.checkUser(email).subscribe((res: any) => {
      this.submitted = false;
      const btnDatosPersonales = document.getElementById('datos-personales') as HTMLButtonElement;
      const data = res.data;
      if (data.length !== 0) {
        this.formInscripcion.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email,
          fechaNacimiento: data.fechaNacimiento,
          dni: data.dni,
          tipoDni: data.tipoDni,
        });
        this.userChecked = true;
        this.formInscripcion.disable();
        this.toast.success('Usuario Verificado!');
        btnDatosPersonales.click();
      } else {
        this.userChecked = false;
        this.formInscripcion.reset();
        this.formInscripcion.enable();
        this.formInscripcion.patchValue({
          email
        });
        this.toast.info('No existe un usuario registrado con ese correo.');
        btnDatosPersonales.click();
      }
    });
  }

  inscribir(): void {
    if (this.userChecked) { // Usuario con cuenta
      const email = this.formInscripcion.controls.email.value;
      this.inscriptionService.inscripcionFisicaConUsuario(email).subscribe(
        (res: any) => {this.toast.success('Inscripción realizada con éxito!');
                       this.clearAll(); },
        (err: any) => {this.toast.error(err.error); });
      return;
    } else if (this.formInscripcion.valid) { // Usuario sin cuenta
      const data = {
        email: this.formInscripcion.controls.email.value,
        nombre: this.formInscripcion.controls.nombre.value,
        apellido: this.formInscripcion.controls.apellido.value,
        fechaNacimiento: this.formInscripcion.controls.fechaNacimiento.value,
        dni: this.formInscripcion.controls.dni.value,
        tipoDni: this.formInscripcion.controls.tipoDni.value
      };
      this.inscriptionService.inscripcionFisicaSinUsuario(data).subscribe(
        (res: any) => {this.toast.success('Inscripción realizada con éxito!');
                       this.clearAll(); },
        (err: any) => {this.toast.error(err.error); });
      return;
    } else {
      const btnForm = document.getElementById('datos-personales') as HTMLButtonElement;
      btnForm.click();
      this.toast.warning('Por favor, complete el formulario de datos personales.');
    }
  }

  goToInscription(): void {
    const btnContinuar = document.getElementById('inscripcion') as HTMLButtonElement;
    if (this.userChecked) {
      btnContinuar.click();
    } else if (this.formInscripcion.valid) {
      this.submitted = false;
      btnContinuar.click();
    } else {
      this.toast.warning('Por favor, complete todos los campos.');
    }
  }

  handleDateFormat(): void {
    const fecha = this.datos.fechaNacimiento.split('-');
    this.datos.fechaNacimiento = fecha[2] + '/' + fecha[1] + '/' + fecha[0];
  }

  clearAll(): void {
    this.formCorreo.reset();
    this.formInscripcion.reset();
    this.formInscripcion.disable();
    const btnVerificar = document.getElementById('verificacion-usuario') as HTMLButtonElement;
    btnVerificar.click();
  }

  getTiposDni(): void {
    this.userService.getDni().subscribe((res: any) => {
      this.tipoDniList = res;
    });
  }

  getTarifas(): void {
    this.tarifaService.getTarifas().subscribe((res: any) => {
      this.tarifaList = res.data;
      console.log(this.tarifaList);
    });
  }
}
