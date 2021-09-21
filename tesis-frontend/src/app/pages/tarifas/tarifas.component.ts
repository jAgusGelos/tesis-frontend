import { Component, OnInit } from '@angular/core';
import { TarifasService } from 'src/app/core/services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  edit = false;
  tarifaList = [];

  constructor(private tarifaService: TarifasService) { }

  ngOnInit(): void {
  }

  getTarifas() {
    this.tarifaService.getTarifas().subscribe((res: any) => {
      this.tarifaList = res.data
    });
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
