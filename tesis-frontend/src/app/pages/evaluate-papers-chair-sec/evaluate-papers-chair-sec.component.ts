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
  detailed = false;

  // Detalles
  index = 0;
  criterios = [];
  detalles = [{criterio: '', res1: '', res2: '', res3: ''}];
  detNombreArticulo = '';
  detResponsable = '';
  detIdEstado = 0;
  detEstado = '';
  detEvUno = {id: 0, nombre: 'Evaluador 1'};
  detEvDos = {id: 0, nombre: 'Evaluador 2'};
  detEvTres = {id: 0, nombre: 'Evaluador 3'};
  messageHeader = '';
  messageBody = '';

  articuloSeleccionado: {articulo: IntPaper, evUno, evDos, evTres};

  ngOnInit(): void {
    this.getArticulos();
  }


  evaluarDetalle(index) {
    let select =  document.getElementById('selectStateDetalle') as HTMLSelectElement;
    let value = select.options[select.selectedIndex].value;
    if (value == '') {
      document.getElementById('selectStateDetalle').classList.add('is-invalid');
      return;
    } else {
      this.evaluar(index, value);
    }
  }
  evaluar(index, opt) {
    let estado = this.articulos[index].idEstado;
    let bandera = false;
    if (estado >= 5) {
      bandera = true;
    }
    if (opt == 1 && bandera) { // Aprobar Reentrega
      estado = 8;
    } else if (opt == 2 && bandera) { // Rechazar Reentrega
      estado = 9;
    } else if (opt == 1) { // Aprobar
      estado = 6;
    } else if (opt == 2) { // Rechazar
      estado = 7;
    } else if (opt == 3) { // Reentregar
      estado = 5;
    }

    const idArticulo = this.articulos[index].id;
    const calificacion = estado;
    this.paperService.calificarPaper(idArticulo, calificacion).subscribe((res: any) => {
      this.cambiarEstado(index, opt);
      this.toggleEdit(index);
    });
  }

  cambiarEstado(index, opt) {
    let bandera = false;
    if (this.articulos[index].idEstado >= 5) {
      bandera = true;
    }
    if (opt == 1 && bandera) {
      this.articulos[index].idEstado = 8; // Aprobado Reentrega
      this.articulos[index].estado = 'Aprobado Reentrega';
      this.detIdEstado = 8;
      this.detEstado = 'Aprobado Reentrega';
      return;
    }
    if (opt == 2 && bandera) {
      this.articulos[index].idEstado = 9; // Rechazado Reentrega
      this.articulos[index].estado = 'Rechazado Reentrega';
      this.detIdEstado = 9;
      this.detEstado = 'Rechazado Reentrega';
      return;
    }
    if (opt == 1) {
      this.articulos[index].idEstado = 6; // Aprobado
      this.articulos[index].estado = 'Aprobado';
      this.detIdEstado = 6;
      this.detEstado = 'Aprobado';
      return;
    }
    if (opt == 2) {
      this.articulos[index].idEstado = 7; // Rechazado
      this.articulos[index].estado = 'Rechazado';
      this.detIdEstado = 7;
      this.detEstado = 'Rechazado';
      return;
    }
    if (opt == 3) {
      this.articulos[index].idEstado = 5; // Reentrega
      this.articulos[index].estado = 'Para Reentregar';
      this.detIdEstado = 5;
      this.detEstado = 'Para Reentregar';
      return;
    }
  }

  getArticulos() {
    this.articulos = [];
    this.paperService.getPapersXChair().subscribe((res: any) => {
      const data = res.data[0].articulos;
      this.articulos = data;
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
    });
  }

  verDetalle(index) {
    this.index = index;
    this.detEvUno.nombre = 'Evaluador 1';
    this.detEvDos.nombre = 'Evaluador 2';
    this.detEvTres.nombre = 'Evaluador 3';
    const art = this.articulos[index];
    const ev = art.evaluaciones;
    this.detNombreArticulo = art.nombre;
    this.detResponsable = art.responsable;
    this.detIdEstado = art.idEstado;
    this.detEstado = art.estado;
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
      this.paperService.getEvaluationDetails(art.id).subscribe((res: any) => {
        const evaluaciones = res.data;
        let ev1, ev2, ev3;
        evaluaciones.forEach(e => {
          if (e.idEvaluador == this.detEvUno.id) {ev1 = e;}
          else if (e.idEvaluador == this.detEvDos.id) {ev2 = e;}
          else {ev3 = e;}
        });
        let calif1 = null, calif2 = null, calif3 = null;
        for (let i = 0; i < items.length; i++) {
          if (ev1.itemsEvaluados[i].calificacion !== undefined) { calif1 = ev1.itemsEvaluados[i].calificacion; }
          if (ev2.itemsEvaluados[i].calificacion !== undefined) { calif2 = ev2.itemsEvaluados[i].calificacion; }
          if (ev3.itemsEvaluados[i].calificacion !== undefined) { calif3 = ev3.itemsEvaluados[i].calificacion; }
          this.detalles.push({criterio: items[i].nombre,
                              res1: calif1,
                              res2: calif2,
                              res3: calif3, });
          calif1 = null, calif2 = null, calif3 = null;
        }
        this.detalles.shift();
        this.detalles.push({criterio: 'Recomendación',
          res1: this.articulos[index].evaluaciones[0].recomendacion,
          res2: this.articulos[index].evaluaciones[1].recomendacion,
          res3: this.articulos[index].evaluaciones[2].recomendacion, });
      });
    });

    const btnDetalle = document.getElementById('activar-modal');
    btnDetalle.click();
  }

  getArchivo(index) {
    const id = this.articulos[index].id;
    const fileName = this.articulos[index].url;
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

  modalOnClose(index) {
    this.detalles = [];
    this.articulos[index].edit = false;
  }

  toggleEdit(index) {
    this.articulos[index].edit = !this.articulos[index].edit;
  }
}
