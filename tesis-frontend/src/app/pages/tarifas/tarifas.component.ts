import { Component, OnInit } from '@angular/core';
import { ITarifa } from 'src/app/core/models/itarifa';
import { TarifasService } from 'src/app/core/services/tarifas.service';
import { CongressService } from 'src/app/core/services/congress.service';


@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  edit = false;
  new = false;
  tarifa;
  tarifaList: ITarifa[] = [];

  constructor(private tarifaService: TarifasService) { }

  ngOnInit(): void {
    this.getTarifas();
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
      this.tarifaList = res.data;
    });
  } 

  postTarifa(item) {
    this.tarifaService.postTarifa(item).subscribe((res: any) => {
      this.getTarifas();
      this.toggleEdit();
    },
    (err: any) => console.log(err));
  }

  putTarifa(item) {
    this.tarifaService.putTarifa(item).subscribe((res: any) => {
      this.getTarifas();
      this.toggleEdit();
    });
  }

  deleteTarifa(id) {
    this.tarifaService.deleteTarifa(id).subscribe((res: any) => {
      this.getTarifas();
      
    });
  }

  newTarifa(): void {
    this.tarifa = {
    id: '0',
    idCongreso: this.tarifaService.idCongreso.toString(),
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
