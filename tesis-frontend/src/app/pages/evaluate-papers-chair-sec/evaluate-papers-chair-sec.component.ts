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

  edit = false;
  articulos = [];
  vectorArticulos = [];
  detailed = false;

  // Detalles
  index = 0;
  observacionAutor = '';
  detalles = [];
  detNombreArticulo = '';
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

  constructor(private paperService: PaperService,
              private evaluationService: EvaluationService) { }

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
    if (opt === 1) { // Aprobar
      estado = 6;
    } else if (opt === 2) { // Rechazar
      estado = 7;
    } else if (opt === 3) { // Reentregar
      estado = 5;
    }
    const idArticulo = this.vectorArticulos[index].id;
    const calificacion = estado;
    const obs = document.getElementById('observacion-autor') as HTMLTextAreaElement;
    this.observacionAutor = obs.value;
    this.articulos[index].observacion = obs.value;
    this.vectorArticulos[index].observacion = obs.value;
    this.paperService.calificarPaper(idArticulo, calificacion, this.observacionAutor).subscribe((res: any) => {
      const sel = document.getElementById('selectStateDetalle') as HTMLSelectElement;
      sel.value = '';
      this.setBadges(index, calificacion);
      this.toggleEdit(index);
    });
  }

  setBadges(index, estado): any {
    if (estado === 5) {
      this.vectorArticulos[index].idEstado = estado;
      this.vectorArticulos[index].estado = 'Reentrega';
      this.detEstado.id = 5;
      this.detEstado.nombre = 'Reentrega';
      return;
    }
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
    if (estado === 8) {
      this.vectorArticulos[index].idEstado = estado;
      this.vectorArticulos[index].estado = 'Aprobado';
      this.detEstado.id = 8;
      this.detEstado.nombre = 'Aprobado';
      return;
    }
    if (estado === 9) {
      this.vectorArticulos[index].idEstado = 9;
      this.vectorArticulos[index].estado = 'Rechazado';
      this.detEstado.id = 9;
      this.detEstado.nombre = 'Rechazado';
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
    const obs = document.getElementById('observacion-autor') as HTMLTextAreaElement;
    obs.value = art.observacion;
    this.observacionAutor = art.observacion;
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
        let rec1 = null;
        let rec2 = null;
        let rec3 = null;
        let obs1 = null;
        let obs2 = null;
        let obs3 = null;
        let obsInterna1 = null;
        let obsInterna2 = null;
        let obsInterna3 = null;
        for (let i = 0; i < items.length; i++) {
          if (ev1 !== undefined) {
            if (ev1.itemsEvaluados[i] !== undefined) { calif1 = ev1.itemsEvaluados[i].calificacion; }
            else { calif1 = 0; }
          } else { calif1 = 0; }
          if (ev2 !== undefined) {
            if (ev2.itemsEvaluados[i] !== undefined) { calif2 = ev2.itemsEvaluados[i].calificacion; }
            else { calif2 = 0; }
          } else { calif2 = 0; }
          if (ev3 !== undefined) {
            if (ev3.itemsEvaluados[i] !== undefined) { calif3 = ev3.itemsEvaluados[i].calificacion; }
            else { calif3 = 0; }
          } else { calif3 = 0; }
          this.detalles.push({aspecto: items[i].nombre,
                              res1: this.puntuaciones[calif1].nombre,
                              res2: this.puntuaciones[calif2].nombre,
                              res3: this.puntuaciones[calif3].nombre});
          calif1 = null, calif2 = null, calif3 = null;
        }
        if (this.vectorArticulos[index].evaluaciones[0] !== undefined) {
          rec1 = this.vectorArticulos[index].evaluaciones[0].recomendacion;
          obs1 = this.vectorArticulos[index].evaluaciones[0].observacion;
          obsInterna1 = this.vectorArticulos[index].evaluaciones[0].observacionInterna;
        } else {
          rec1 = null;
          obs1 = null;
          obsInterna1 = null;
        }
        if (this.vectorArticulos[index].evaluaciones[1] !== undefined) {
          rec2 = this.vectorArticulos[index].evaluaciones[1].recomendacion;
          obs2 = this.vectorArticulos[index].evaluaciones[1].observacion;
          obsInterna2 = this.vectorArticulos[index].evaluaciones[1].observacionInterna;
        } else {
          rec2 = null;
          obs2 = null;
          obsInterna2 = null;
        }
        if (this.vectorArticulos[index].evaluaciones[2] !== undefined) {
          rec3 = this.vectorArticulos[index].evaluaciones[2].recomendacion;
          obs3 = this.vectorArticulos[index].evaluaciones[2].observacion;
          obsInterna3 = this.vectorArticulos[index].evaluaciones[2].observacionInterna;
        } else {
          rec3 = null;
          obs3 = null;
          obsInterna3 = null;
        }
        this.detalles.push({aspecto: 'Recomendación',
          res1: rec1,
          res2: rec2,
          res3: rec3});
        this.detalles.push({aspecto: 'Observación para el Autor',
          res1: obs1,
          res2: obs2,
          res3: obs3});
        this.detalles.push({aspecto: 'Observación Interna',
          res1: obsInterna1,
          res2: obsInterna2,
          res3: obsInterna3});
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
          observacion: x.observacion,
          observacionInterna: x.observacionInterna,
          url: x.url,
          edit: false
        };
      });
      this.vectorArticulos = this.articulos;
      for (let index = 0; index < this.vectorArticulos.length; index++) {
        this.setBadges(index, this.vectorArticulos[index].idEstado);
      }
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
    const sel = document.getElementById('selectStateDetalle') as HTMLSelectElement;
    sel.value = '';
    const obs = document.getElementById('observacion-autor') as HTMLTextAreaElement;
    obs.value = '';
    this.detalles = [];
    document.getElementById('selectStateDetalle').classList.remove('is-invalid');
    this.vectorArticulos[index].edit = false;
  }

  toggleEdit(index): void {
    this.vectorArticulos[index].edit = !this.vectorArticulos[index].edit;
  }
}
