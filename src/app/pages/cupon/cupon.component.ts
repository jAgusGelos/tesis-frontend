import { Component, OnInit } from '@angular/core';
import { ITarifa } from 'src/app/core/models/ITarifa';
import { CuponService } from 'src/app/core/services/cupon.service';
import { TarifasService } from 'src/app/core/services/tarifas.service';
import { ToastrService } from 'ngx-toastr';
import { ICupon } from 'src/app/core/models/ICupon';
import { CustomToastComponent } from 'src/app/core/components/custom-toast/custom-toast.component';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent implements OnInit {

  edit = false;
  new = false;
  message = {header: '', body: ''};
  cupon: ICupon;
  cuponList: ICupon[];
  tarifaList = [];
  selectedTarifa: ITarifa;
  codeValidation = '';

  constructor(private cuponService: CuponService,
              private tarifaService: TarifasService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCupones();
  }

  getCupones(): void {
    this.cuponList = [];
    this.cuponService.getCupones().subscribe((res: any) => {
      this.cuponList = res.data;
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

  deleteCupon(cupon): void {
    this.toastr.show( '¿Seguro que deseas borrar el cupón ' + cupon.codigo + '?', 'Borrar Cupón', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        this.cuponService.deleteCupon(cupon).subscribe((res: any) => {
          this.getCupones();
        });
      });
  }

  verificarCupon(codigo): void {
    this.cuponService.verifyCupon(codigo).subscribe((res: any) => {
    });
  }

  validarCodigoCupon(codigo): void {
    this.cuponService.validateCode(codigo).subscribe(
      res => {this.toastr.success('Código válido.');
              this.codeValidation = res.status; },
      err => {this.toastr.warning('El código ya existe.');
              this.codeValidation = err.status; });
  }

  getTarifas(): void {
    this.tarifaList = [];
    this.tarifaService.getTarifas().subscribe((res: any) => {
      this.tarifaList = res.data;
    });
  }

  newCupon(): void {
    this.cupon = {
    codigo: '',
    idTarifa: '',
    nombreTarifa: '',
    porcentajeDesc: 0,
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

  toggleEdit(): void {
    this.edit = !this.edit;
  }
}
