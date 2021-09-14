import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {

  idCongress = '';
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
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // El usuario si o si tiene que estar logueado. Datos mínimos.
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
    // Comunica con MP para realizar el pago.
    // post
  }

}
