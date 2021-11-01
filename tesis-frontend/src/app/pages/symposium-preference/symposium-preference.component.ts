import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  ready = false;

  constructor( private symposiumService: SymposiumService,
               private toastr: ToastrService) { }

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
      this.toastr.success('Simposio agregado!');
    });
  }

  eliminarSimposioEvaluador(simposio: ISymposium, index): void {
    this.symposiumService.deleteEvaluatorSymposium(simposio).subscribe((res: any) => {
      this.mySymposiums.splice(index, 1);
      this.symposiumList.push(simposio);
      this.toastr.success('Simposio Eliminado!');
    });
  }

  excluirPreferencias(): void {
    const aux = [];
    console.log(this.symposiumList);
    console.log(this.mySymposiums);
    const ids = this.mySymposiums.map((x) => x.id);
    this.symposiumList = this.symposiumList.filter((x: any) => {
      if (!ids.includes(x.id)) {
        return x;
      }
    });
    console.log(this.symposiumList);
    this.ready = true;
  }
}
