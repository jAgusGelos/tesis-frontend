import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  tarifa;
  tarifaList: ITarifa[] = [];

  constructor(private tarifaService: TarifasService,
              private router: Router) { }

  ngOnInit(): void {
    this.getTarifas();
  }

  getTarifas(): void{
    this.tarifaList = [];
    this.tarifaService.getTarifas().subscribe((res: any) => {
      this.tarifaList = res.data;
    });
  }

  getTarifasActivas(): void{
    this.tarifaList = [];
    this.tarifaService.getTarifasActivas().subscribe((res: any) => {
      this.tarifaList = res.data;
    });
  }

  postTarifa(item): void {
    this.tarifaService.postTarifa(item).subscribe((res: any) => {
      this.toggleEdit();
      this.getTarifas();
    },
    (err: any) => console.log(err));
  }

  putTarifa(item): void {
    this.tarifaService.putTarifa(item).subscribe((res: any) => {
      this.getTarifas();
      this.toggleEdit();
    });
  }

  deleteTarifa(id): void {
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
    fechaDesde: '',
    fechaHasta: ''};
    this.new = true;
    this.toggleEdit();
  }

  editTarifa(item: ITarifa): void {
    this.tarifa = item;
    this.new = false;
    this.toggleEdit();
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }
}
