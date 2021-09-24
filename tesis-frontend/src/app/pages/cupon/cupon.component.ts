import { Component, OnInit } from '@angular/core';
import { ICupon } from 'src/app/core/models/icupon';
import { CuponService } from 'src/app/core/services/cupon.service';

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
  cuponList: ICupon[] = [{codigo: 'CUPON1', porcentaje: 10, idTarifa: '1', usosRestantes: 2},
                         {codigo: 'CUPON2', porcentaje: 50, idTarifa: '2', usosRestantes: 4},
                         {codigo: 'CUPON3', porcentaje: 0, idTarifa: '3', usosRestantes: 7},
                         {codigo: 'CUPON1', porcentaje: 80.5, idTarifa: '4', usosRestantes: 1}];
  tarifaList = [];

  constructor(private cuponService: CuponService) { }

  ngOnInit(): void {
  }

  getCupones(): void {
    this.cuponList = [];
    this.cuponService.getCupones().subscribe((res: any) => {
      this.cuponList = res.data[0];
    });
  }

  postCupon(item): void {
    this.cuponService.postCupon(item).subscribe((res: any) => {
      this.openModal('', '¡Cupón agregado exitosamente!');
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
      this.openModal('', '¡Cupón eliminado exitosamente!');
      this.getCupones();
    });
  }

  verificarCupon(codigo): void {
    this.cuponService.verifyCupon(codigo).subscribe({
      next(res: any) {this.codeIsValid = true},
      error(err: any) {this.codeIsValid = false}});
  }

  getTarifasActivas() {
    this.tarifaList = [];
    /* this.tarifaService.getTarifasActivas().subscribe((res: any) => {
      this.tarifaList = res.data[0];
      console.log(this.tarifaList);
    }); */
  } 

  newCupon(): void {
    this.cupon = {
    codigo: '',
    porcentaje: 0,
    idTarifa: '',
    usosRestantes: 0
    };
    this.getTarifasActivas();
    this.new = true;
    this.toggleEdit();
  }

  editCupon(item: ICupon): void {
    this.cupon = item;
    this.new = false;
    this.toggleEdit();
  }

  openModal(header, body) {
    this.message.header = header;
    this.message.body = body;
    document.getElementById('modal-message').click();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
