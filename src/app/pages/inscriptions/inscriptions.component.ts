import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CongressService } from 'src/app/core/services/congress.service';
import { InscriptionsService } from 'src/app/core/services/inscriptions.service';
import { TarifasService } from 'src/app/core/services/tarifas.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {

  idCongress = '';
  congress = {
      id: 1,
      nombre: 'Prueba',
      sede: 'FRC',
      fechaInicio: '21/08/2022',
      fechaFin: '25/08/2022',
    };
  tarifas = [ ];
  tarifaSelected = false;
  datosCompletos = false;
  loading = false;
  idInscrip = null;
  formUsuario: FormGroup;
  submitted = false;
  isLinear = false;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private inscriptionService: InscriptionsService,
              private router: Router,
              private toastr: ToastrService,
              private congressService: CongressService,
              private tarifaService: TarifasService
              ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    // El usuario si o si tiene que estar logueado. Datos mínimos.
    this.formUsuario = this.formBuilder.group({
      cupon: [''],
    });
    this.idCongress = this.route.snapshot.paramMap.get('id');
    this.getCongresos();
    this.getTarifas();
  }

  getCongresos(): void {
   this.congressService.getCongressById().subscribe((res: any) => {
    const fechaI = res.data[0].fechaInCongreso.split(' ')[0].split('/');
    const fechaF = res.data[0].fechaFinCongreso.split(' ')[0].split('/');

    const fechaIn = new Date(fechaI[2], fechaI[1] - 1, fechaI[0]);
    const fechaFin = new Date(fechaF[2], fechaF[1] - 1, fechaF[0]);
    this.congress = {
      id: res.data[0].id,
      nombre: res.data[0].nombre,
      sede: res.data[0].nombre_sede,
      fechaInicio: fechaIn.toLocaleDateString(),
      fechaFin: fechaFin.toLocaleDateString(),
    };
   });
  }

  getTarifas(): void {
    // Traer datos de tarifa para estudiantes / asistentes/ autores.
    // URL : inscripciones/devolver-tarifas-activas/
    this.tarifaService.getTarifasActivas().subscribe((res: any) => {
      this.tarifas = res.data;
    });
  }

  pagar(): void {
    // Tirar el post a la BD para conseguir el preference id.
    // post
    this.inscriptionService.generatePreference(this.idInscrip).subscribe((res: any) => {
      this.loading = true;
      window.location.href = res.init_point;
    });
  }

  inscribirme(item: any): void {
    // Post a la BD - URL: inscripciones/crear-inscripcion/ --> idInscripción - PrecioFinal // 400 si cupón inválido
    const cupon = this.formUsuario.controls.cupon.value;
    this.formUsuario.controls.cupon.setErrors(null);
    this.inscriptionService.inscribirme(cupon).subscribe((res: any) => {
      if (res.error) {
        this.toastr.warning('Error en la inscripción. Usted ya se encuentra inscripto o el cupón ingresado es inválido.');
        this.formUsuario.controls.cupon.setErrors({incorrect: true});
        return;
      }
      this.idInscrip = res.data.id;
      this.tarifaSelected = {
        ...item,
        precio: res.data.precioFinal
      };
      const btnDetalle = document.getElementById('go-next');
      btnDetalle.click();
    });
  }

  datos(): void {
    this.datosCompletos = false;
    if (this.formUsuario.invalid) {
      this.toastr.warning('Por favor complete los datos');
      return;
    }
    this.datosCompletos = true;
  }

}
