import { Component, NgModule, OnInit } from '@angular/core';
import { IEvaluator } from 'src/app/core/models/ievaluator';
import { ArticulosService } from 'src/app/core/services/articulos.service';
import { SymposiumService } from 'src/app/core/services/symposium.service';
import { IntPaper } from 'src/app/core/models/IntPaper';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-evaluate-papers-chair-sec',
  templateUrl: './evaluate-papers-chair-sec.component.html',
  styleUrls: ['./evaluate-papers-chair-sec.component.css']
})
export class EvaluatePapersChairSecComponent implements OnInit {

  detailed = false;
  articulos = [];
  idSimposio = '';

  constructor(private articulosService: ArticulosService) { }

  articuloSeleccionado: {
    articulo: IntPaper,
    evUno: IEvaluator,
    evDos: IEvaluator,
    evTres: IEvaluator
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.articulos = [];
    this.articulosService.getPapersByChair().subscribe((res: any) => {
      let data = res.data;
      this.articulos = data[0].articulos
    });
  }

  verLista() {
    this.detailed = false;
  }

  verDetalle(art: any) {
    this.articuloSeleccionado = art;
    this.detailed = true;
  }
}
