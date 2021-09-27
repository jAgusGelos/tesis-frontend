import { Component, OnInit } from '@angular/core';
import { ICupon } from 'src/app/core/models/icupon';
import { ITarifa } from 'src/app/core/models/ITarifa';
import { CuponService } from 'src/app/core/services/cupon.service';
import { TarifasService } from 'src/app/core/services/tarifas.service';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent implements OnInit {

  edit = false;
  new = false;
  codeIsValid = false;
  message = {header: '', body: ''};
  cupon: ICupon;
  cuponList: ICupon[] /* = [{codigo: 'CUPON1', porcentaje: 10, idTarifa: '1', usosRestantes: 2},
                         {codigo: 'CUPON2', porcentaje: 50, idTarifa: '2', usosRestantes: 4},
                         {codigo: 'CUPON3', porcentaje: 0, idTarifa: '3', usosRestantes: 7},
                         {codigo: 'CUPON1', porcentaje: 80.5, idTarifa: '4', usosRestantes: 1}]; */
  tarifaList = [];
  selectedTarifa: ITarifa;

  constructor(private cuponService: CuponService,
              private tarifaService: TarifasService) { }

  ngOnInit(): void {
    this.getCupones();
  }

  getCupones(): void {
    this.cuponList = [];
    this.cuponService.getCupones().subscribe((res: any) => {
      this.cuponList = res.data[0];
      console.log(this.cuponList);
    });
  }

  postCupon(item): void {
    this.cuponService.postCupon(item).subscribe((res: any) => {
      this.getCupones();
      this.toggleEdit();
    });
  }

  putCupon(item): void {
    this.cuponService.putCupon(item).subscribe((res: any) => {
      this.getCupones();
      this.toggleEdit();
    });
  }

  deleteCupon(codigo): void {
    this.cuponService.deleteCupon(codigo).subscribe((res: any) => {
      this.getCupones();
    });
  }

  verificarCupon(codigo): void {
    this.cuponService.verifyCupon(codigo).subscribe({
      next(res: any) {this.codeIsValid = true},
      error(err: any) {this.codeIsValid = false}});
  }

  getTarifas() {
    this.tarifaList = [];
    this.tarifaService.getTarifas().subscribe((res: any) => {
      this.tarifaList = res.data[0];
    });
  }

  getTarifaById(idTarifa) {
    this.tarifaService.getTarifaById(idTarifa).subscribe((res: any) => {
      this.selectedTarifa = res.data[0];
    });
  } 

  newCupon(): void {
    this.cupon = {
    codigo: '',
    porcentaje: 0,
    idTarifa: '',
    usosRestantes: 0
    };
    this.getTarifas();
    this.selectedTarifa = {
      id: '0',
      idCongreso: '0',
      nombre: '',
      precio: 0,
      fechaDesde: '',
      fechaHasta: ''
    };
    this.new = true;
    this.toggleEdit();
  }

  editCupon(item: ICupon): void {
    this.cupon = item;
    this.getTarifas();
    this.new = false;
    this.toggleEdit();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }
}
