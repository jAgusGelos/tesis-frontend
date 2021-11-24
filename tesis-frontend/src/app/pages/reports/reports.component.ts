import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/core/services/stats.service';
declare var require: any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  constructor(private statsService: StatsService) { }

  reportList = [
    {name: 'Reporte de Eventos', value: '1'},
    {name: 'Reporte de Evaluadores', value: '2'},
    {name: 'Reporte de Articulos', value: '3'},
    {name: 'Reporte de Asistentes', value: '4'},
    {name: 'Reporte de Expositores', value: '5'}
  ];
  colName = [];
  attrName = [];
  itemList = [];
  selectedValue = 0;

  ngOnInit(): void {
  }

  reporteSelected(id: string): void {
    switch (id) {
      case '1':
        this.statsService.getRepEvent().subscribe((res: any) => {
          this.colName = ['Evento', 'Descripción', 'Calificación Promedio', 'Inicio', 'Fin', 'Articulo', 'Aula', 'Simposio'];
          this.attrName = ['evento', 'descripcionEvento', 'calificacionPromedio', 'inicio', 'fin', 'articulo', 'aula', 'simposio'];
          this.itemList = res.data;
          this.selectedValue = 1;
        });
        break;
        case '2':
          this.statsService.getRepEval().subscribe((res: any) => {
            this.colName = ['Nombre', 'Apellido', 'DNI', 'Sede', 'Evaluaciones Realizadas', 'Evaluaciones Rechazadas'];
            this.attrName = ['nombre', 'apellido', 'dni', 'sede', 'evaluacionesRealizadas', 'evaluacionesRechazadas'];
            this.itemList = res.data;
            this.selectedValue = 2;

          });
          break;
          case '3':
            this.statsService.getRepArtic().subscribe((res: any) => {
              this.colName = ['Nombre Artículo', 'Simposio', 'Estado', 'Responsable', 'Cantidad de Autores'];
              this.attrName = ['nombreArticulo', 'simposio', 'estado', 'responsable', 'cantidadAutores'];
              this.itemList = res.data;
              this.selectedValue = 3;

            });
            break;
            case '4':
        this.statsService.getRepAsist().subscribe((res: any) => {
          this.colName = ['Nombre', 'Apellido', 'DNI', 'Tarifa', 'Precio Final', 'Fecha Inscripción', 'Fecha Pago'];
          this.attrName = ['nombre', 'apellido', 'dni', 'tarifa', 'precioFinal', 'fechaInscripción', 'fechaPago'];
          this.itemList = res.data;
          this.selectedValue = 4;

        });
        break;
        case '5':
        this.statsService.getRepExpos().subscribe((res: any) => {
          this.colName = ['Nombre', 'Apellido', 'DNI', 'Sede'];
          this.attrName = ['nombre', 'apellido', 'dni', 'sede'];
          this.itemList = res.data;
          this.selectedValue = 5;

        });
        break;


      default:
        break;
    }

  }

  print(): void {

    const body = [];
    this.itemList.forEach(item => {
      const list = [];
      this.attrName.forEach(name => {
        list.push(item.name);
      });
      body.push(list);
    });

    var doc = require('jspdf');
    require('jspdf-autotable');
    let easd = new doc();
// Or use javascript directly:
    easd.autoTable({
      head: [this.colName],
      body: [
        body
      ],
    });

    easd.save('table.pdf');

  }

}
