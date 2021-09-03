import { Component, OnInit } from '@angular/core';
import { IEvaluator } from 'src/app/core/models/ievaluator';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { ArticulosService } from 'src/app/core/services/articulos.service';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';
import { SymposiumService } from 'src/app/core/services/symposium.service';
import { IntPaper } from 'src/app/core/models/IntPaper';

@Component({
  selector: 'app-evaluate-papers-chair-sec',
  templateUrl: './evaluate-papers-chair-sec.component.html',
  styleUrls: ['./evaluate-papers-chair-sec.component.css']
})
export class EvaluatePapersChairSecComponent implements OnInit {

  symposium: ISymposium;
  detailed: Boolean = false;

  articulos: any[] = [{id: '1', nombre: 'Artículo 1', estado: 'Aprobado'},
                      {id: '2', nombre: 'Artículo 2', estado: 'Rechazado'},
                      {id: '3', nombre: 'Artículo 3', estado: 'Sin evaluar'},
                      {id: '4', nombre: 'Artículo 4', estado: 'Para reentrega'},
                      {id: '5', nombre: 'Artículo 5', estado: 'Aprobado'},
                      {id: '6', nombre: 'Artículo 6', estado: 'Sin evaluar'}];

  constructor(private symposiumService: SymposiumService,
              private articulosService: ArticulosService) { }

  articuloSeleccionado: {
    articulo: IntPaper,
    evUno: IEvaluator,
    evDos: IEvaluator,
    evTres: IEvaluator
  }

  ngOnInit(): void {
    this.getSymposium();
  }

  getArticulos(){
    this.articulosService.getPapersBySymposium(this.symposium).subscribe((res: any) => {
      this.articulos = res.data;
    })
  }

  getSymposium() {
    this.symposiumService.getSymposium().subscribe((res: any) => {
      this.symposium = res.data
    })
  }

  verLista() {
    this.getArticulos();
    this.detailed = false;
  }

  verDetalle(art: any) {
    this.articuloSeleccionado = art;
    this.detailed = true;
  }
}
