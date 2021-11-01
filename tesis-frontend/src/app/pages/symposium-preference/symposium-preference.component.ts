import { Component, OnInit } from '@angular/core';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { SymposiumService } from 'src/app/core/services/symposium.service';

@Component({
  selector: 'app-symposium-preference',
  templateUrl: './symposium-preference.component.html',
  styleUrls: ['./symposium-preference.component.css']
})
export class SymposiumPreferenceComponent implements OnInit {

  description = 'Aquí puede elegir los simposios de su preferencia. Estos serán tenidos en cuenta al momento de que se le asigne artículos para evaluar.';
  symposiumList: ISymposium[] = [];
  mySymposiums: ISymposium[] = [];

  constructor( private symposiumService: SymposiumService) { }

  ngOnInit(): void {
    this.getSimposios();
  }

  getSimposios(): void {
    this.symposiumService.getSymposium().subscribe((res: any) => {
      this.symposiumList = res.data;
      this.getSimposiosEvaluador();
    });
  }

  getSimposiosEvaluador(): void {
    let data = [];
    this.symposiumService.getEvaluatorSymposium().subscribe((res: any) => {
      data = res.data;
      this.mySymposiums = data.map((x: any) => {
        return {
          id: x.idSimposio,
          nombre: x.nombreSimposio,
          descripcion: x.descripcionSimposio
        };
      });
      this.excluirPreferencias();
    });
  }

  asignarSimposioEvaluador(simposio: ISymposium, index): void {
    const data = {simposios: simposio.id.toString()};
    this.symposiumService.postEvaluatorSymposium(data).subscribe((res: any) => {
      this.mySymposiums.push(simposio);
      this.symposiumList.splice(index, 1);
      alert('Simposio agregado!');
    });
  }

  eliminarSimposioEvaluador(simposio: ISymposium, index): void {
    this.symposiumService.deleteEvaluatorSymposium(simposio).subscribe((res: any) => {
      this.mySymposiums.splice(index, 1);
      this.symposiumList.push(simposio);
      alert('Simposio eliminado!');
    });
  }

  excluirPreferencias(): void {
    const aux = [];
    for (const sy of this.symposiumList) {
      for (const my of this.mySymposiums) {
        if (sy.id !== my.id) {
          aux.push(sy);
        }
      }
    }
    this.symposiumList = aux;
  }
}
