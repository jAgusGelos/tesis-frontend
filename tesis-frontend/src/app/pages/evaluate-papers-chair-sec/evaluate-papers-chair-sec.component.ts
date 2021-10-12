import { Component, NgModule, OnInit } from '@angular/core';
import { PaperService } from 'src/app/core/services/paper.service';
import { EvaluationService } from 'src/app/core/services/evaluation.service';
import { IntPaper } from 'src/app/core/models/IntPaper';

@Component({
  selector: 'app-evaluate-papers-chair-sec',
  templateUrl: './evaluate-papers-chair-sec.component.html',
  styleUrls: ['./evaluate-papers-chair-sec.component.css']
})
export class EvaluatePapersChairSecComponent implements OnInit {


  constructor(private paperService: PaperService,
              private evaluationService: EvaluationService) { }



  edit = false;
  articulos = [];
  vectorArticulos = [];
  detailed = false;
  articuloSeleccionado: {articulo: IntPaper, evUno, evDos, evTres};

  // Detalles
  index = 0;
  criterios = [];
  detalles = [];
  detNombreArticulo = '';
  detResponsable = '';
  detEstado = {
    id: 0,
    nombre: ''
  };
  detEvUno = {id: 0, nombre: 'Evaluador 1'};
  detEvDos = {id: 0, nombre: 'Evaluador 2'};
  detEvTres = {id: 0, nombre: 'Evaluador 3'};
  puntuaciones = [{value: 0, nombre: ''},
                  {value: 1, nombre: 'Muy Débil'},
                  {value: 2, nombre: 'Débil'},
                  {value: 3, nombre: 'Aceptable'},
                  {value: 4, nombre: 'Bueno'},
                  {value: 5, nombre: 'Muy bueno'}];
  messageHeader = '';
  messageBody = '';

  ngOnInit(): void {
    this.getArticulos();
  }

  evaluarDetalle(index): void {
    const select = document.getElementById('selectStateDetalle') as HTMLSelectElement;
    const opt = select.options[select.selectedIndex].value;
    if (opt === '') {
      document.getElementById('selectStateDetalle').classList.add('is-invalid');
      return;
    } else {
      const optNumber = parseInt(opt, 10);
      this.evaluar(index, optNumber);
    }
  }

  evaluar(index, opt): void {
    let estado = this.vectorArticulos[index].idEstado;
    let bandera = false;
    if (estado >= 5) {
      bandera = true;
    }
    if (opt === 1 && bandera) { // Aprobar Reentrega
      estado = 8;
    } else if (opt === 2 && bandera) { // Rechazar Reentrega
      estado = 9;
    } else if (opt === 1) { // Aprobar
      estado = 6;
    } else if (opt === 2) { // Rechazar
      estado = 7;
    } else if (opt === 3) { // Reentregar
      estado = 5;
    }
    const idArticulo = this.vectorArticulos[index].id;
    const calificacion = estado;
    this.paperService.calificarPaper(idArticulo, calificacion).subscribe((res: any) => {
      this.setBadges(index, calificacion);
      this.toggleEdit(index);
    });
  }

  setBadges(index, estado): any {
    if (estado === 6) {
      this.vectorArticulos[index].idEstado = estado;
      this.vectorArticulos[index].estado = 'Aprobado';
      this.detEstado.id = 6;
      this.detEstado.nombre = 'Aprobado';
      return;
    }
    if (estado === 7) {
      this.vectorArticulos[index].idEstado = estado;
      this.vectorArticulos[index].estado = 'Rechazado';
      this.detEstado.id = 7;
      this.detEstado.nombre = 'Rechazado';
      return;
    }
    if (estado === 5) {
      this.vectorArticulos[index].idEstado = estado;
      this.vectorArticulos[index].estado = 'Para Reentregar';
      this.detEstado.id = 5;
      this.detEstado.nombre = 'Para Reentregar';
      return;
    }
    if (estado === 8) {
      this.vectorArticulos[index].idEstado = estado;
      this.vectorArticulos[index].estado = 'Aprobado Reentrega';
      this.detEstado.id = 8;
      this.detEstado.nombre = 'Aprobado Reentrega';
      return;
    }
    if (estado === 9) {
      this.vectorArticulos[index].idEstado = 9;
      this.vectorArticulos[index].estado = 'Rechazado Reentrega';
      this.detEstado.id = 9;
      this.detEstado.nombre = 'Rechazado Reentrega';
      return;
    }
  }

  verDetalle(index): void {
    this.index = index;
    this.detEvUno.nombre = 'Evaluador 1';
    this.detEvDos.nombre = 'Evaluador 2';
    this.detEvTres.nombre = 'Evaluador 3';
    const art = this.vectorArticulos[index];
    const ev = art.evaluaciones;
    this.detNombreArticulo = art.nombre;
    this.detResponsable = art.responsable;
    this.detEstado.id = art.idEstado;
    this.detEstado.nombre = art.estado;
    if (ev.length >= 1) {
      this.detEvUno.id = ev[0].idEvaluador;
      this.detEvUno.nombre = ev[0].evaluador;
    }
    if (ev.length >= 2) {
      this.detEvDos.id = ev[1].idEvaluador;
      this.detEvDos.nombre = ev[1].evaluador;
    }
    if (ev.length >= 3) {
      this.detEvTres.id = ev[2].idEvaluador;
      this.detEvTres.nombre = ev[2].evaluador;
    }
    this.evaluationService.getItemsEvaluacion(1).subscribe((res: any) => {
      const items = res.data;
      this.paperService.getEvaluationDetails(art.id).subscribe((ans: any) => {
        const evaluaciones = ans.data;
        let ev1;
        let ev2;
        let ev3;
        evaluaciones.forEach(e => {
          if (e.idEvaluador === this.detEvUno.id) {
            ev1 = e;
          }
          else if (e.idEvaluador === this.detEvDos.id) {
            ev2 = e;
          }
          else {
            ev3 = e;
          }
        });
        let calif1 = null;
        let calif2 = null;
        let calif3 = null;
        for (let i = 0; i < items.length; i++) {
          if (ev1.itemsEvaluados[i] !== undefined) { calif1 = ev1.itemsEvaluados[i].calificacion; }
          if (ev2.itemsEvaluados[i] !== undefined) { calif2 = ev2.itemsEvaluados[i].calificacion; }
          if (ev3.itemsEvaluados[i] !== undefined) { calif3 = ev3.itemsEvaluados[i].calificacion; }
          this.detalles.push({aspecto: items[i].nombre,
                              res1: this.puntuaciones[calif1].nombre,
                              res2: this.puntuaciones[calif2].nombre,
                              res3: this.puntuaciones[calif3].nombre});
          calif1 = null, calif2 = null, calif3 = null;
        }
        this.detalles.push({aspecto: 'Recomendación',
          res1: this.vectorArticulos[index].evaluaciones[0].recomendacion,
          res2: this.vectorArticulos[index].evaluaciones[1].recomendacion,
          res3: this.vectorArticulos[index].evaluaciones[2].recomendacion});
      });
    });
    const btnDetalle = document.getElementById('activar-modal');
    btnDetalle.click();
  }

  getArchivo(index): void {
    const id = this.vectorArticulos[index].id;
    this.paperService.getPaperFile(id).subscribe((res: any) => {
      const archivo: ArrayBuffer = res;
      const blob = new Blob([archivo], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

  getArticulos(): void {
    this.articulos = [];
    this.paperService.getPapersXChair().subscribe((res: any) => {
      const data = res.data[0].articulos;
      this.articulos = data;
      this.sortByState();
      this.articulos = this.articulos.map((x: any) => {
        return {
          estado: x.estado,
          evaluaciones: x.evaluaciones,
          id: x.id,
          idCongreso: x.idCongreso,
          idEstado: x.idEstado,
          idSimposio: x.idSimposio,
          nombre: x.nombre,
          responsable: x.responsable,
          url: x.url,
          edit: false
        };
      });
      this.vectorArticulos = this.articulos;
    });
  }

  filter(estado): void {
    this.vectorArticulos = [];
    if (estado === 0) {
      this.vectorArticulos = this.articulos;
      return;
    }
    for (const art of this.articulos) {
      if (art.idEstado === estado) {
        this.vectorArticulos.push(art);
      }
    }
  }

  sortByState(): void {
    this.articulos.sort((a, b) => {
      if (a.idEstado > b.idEstado) {
        return 1;
      } else if (a.idEstado < b.idEstado) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  modalOnClose(index): void {
    this.detalles = [];
    this.vectorArticulos[index].edit = false;
  }

  toggleEdit(index): void {
    this.vectorArticulos[index].edit = !this.vectorArticulos[index].edit;
  }
}
