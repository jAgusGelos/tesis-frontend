import { Component, OnInit } from '@angular/core';
import { ITarifa } from 'src/app/core/models/itarifa';
import { TarifasService } from 'src/app/core/services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  edit = false;
  new = false;
  message = {header: '', body: ''};
  tarifaList: ITarifa[] = [{id: '1', nombre: 'Tarifa 1', precio: 10, fechaDesde: new Date(2018, 11, 24), fechaHasta: new Date(2018, 11, 24)},
                           {id: '2', nombre: 'Tarifa 2', precio: 100, fechaDesde: new Date(2018, 11, 24), fechaHasta: new Date(2018, 11, 24)},
                           {id: '3', nombre: 'Tarifa 3', precio: 200, fechaDesde: new Date(2018, 11, 24), fechaHasta: new Date(2018, 11, 24)},
                           {id: '4', nombre: 'Tarifa 4', precio: 1000, fechaDesde: new Date(2018, 11, 24), fechaHasta: new Date(2018, 11, 24)},
                           {id: '5', nombre: 'Tarifa 5', precio: 5, fechaDesde: new Date(2018, 11, 24), fechaHasta: new Date(2018, 11, 24)},];;
  tarifa;

  constructor(private tarifaService: TarifasService) { }

  ngOnInit(): void {
  }

  getTarifas() {
    this.tarifaList = [];
    this.tarifaService.getTarifas().subscribe((res: any) => {
      this.tarifaList = res.data[0];
    });
  }

  getTarifasActivas() {
    this.tarifaList = [];
    this.tarifaService.getTarifasActivas().subscribe((res: any) => {
      this.tarifaList = res.data[0];
      console.log(this.tarifaList);
    });
  } 

  postTarifa(item) {
    this.tarifaService.postTarifa(item).subscribe((res: any) => {
      this.openModal('', '¡Tarifa agregada exitosamente!');
      this.getTarifasActivas();
      this.toggleEdit();
    });
  }

  putTarifa(item) {
    this.tarifaService.putTarifa(item).subscribe((res: any) => {
      this.getTarifasActivas();
      this.toggleEdit();
    });
  }

  deleteTarifa(id) {
    this.tarifaService.deleteTarifa(id).subscribe((res: any) => {
      this.openModal('', '¡Tarifa eliminada exitosamente!');
      this.getTarifasActivas();
    });
  }

  openModal(header, body) {
    this.message.header = header;
    this.message.body = body;
    document.getElementById('modal-message').click();
  }

  newTarifa(): void {
    this.tarifa = {
    id: '0',
    idCongreso: '0',
    nombre: '',
    precio: 0,
    fechaDesde: new Date(),
    fechaHasta: new Date()};
    this.new = true;
    this.toggleEdit();
  }

  editTarifa(item: ITarifa): void {
    this.tarifa = item;
    this.new = false;
    this.toggleEdit();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }
}
