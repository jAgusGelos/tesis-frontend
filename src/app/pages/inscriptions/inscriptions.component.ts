import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionsService } from 'src/app/core/services/inscriptions.service';

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
  tarifas = [
    {
      id: 1,
      nombre: 'Autores',
      precio: 200
    },
    {
      id: 2,
      nombre: 'Alumnos',
      precio: 150
    },
    {
      id: 3,
      nombre: 'General',
      precio: 250
    }
  ];
  tarifaSelected = false;
  datosCompletos = false;
  formUsuario: FormGroup;
  submitted = false;
  isLinear = false;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private inscriptionService: InscriptionsService,
              private router: Router) { }

  ngOnInit(): void {
    // El usuario si o si tiene que estar logueado. Datos mínimos.
    this.formUsuario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
    });
    this.idCongress = this.route.snapshot.paramMap.get('id');
    this.getCongresos();
    this.getTarifas();
  }

  getCongresos(): void {
    // Traer datos COMPLETOS del congreso para mostrar.
  }

  getTarifas(): void {
    // Traer datos de tarifa para estudiantes / asistentes/ autores.
    // URL : inscripciones/devolver-tarifas/?idCongreso=
  }

  validarDescuento(): void {
    // Valida si un código de descuento es correcto o no.
  }

  pagar(): void {
    // Tirar el post a la BD para conseguir el preference id.
    // post
    console.log(this.tarifaSelected);
    this.inscriptionService.generatePreference(this.tarifaSelected).subscribe((res: any) => {
      window.location.href = res.init_point;
    });
  }

  inscribirme(item: any): void {
    this.tarifaSelected = item;
  }

  datos(): void {
    this.datosCompletos = false;
    if (this.formUsuario.invalid) {
      alert('Por favor complete los datos');
      return;
    }
    this.datosCompletos = true;
  }

}
